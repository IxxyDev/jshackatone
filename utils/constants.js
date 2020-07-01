import { initialData } from "./data.js";
import Section from "../components/Section.js";
import TextContainer from "../components/TextContainer.js";
import Title from "../components/Title.js";
import Storage from "../components/Storage.js";
const storage = new Storage(initialData);
let header = undefined;
let section = undefined;
const texts = []
export const initialPageRender = function () {
  storage.initialRender();
   header = new Title(
    storage.getInitialData().mainTitle,
    ".main-title",
    ".icon"
  );
  section = new Section(
    {
      items: storage.getInitialData().sections,
      renderer: function (item) {
        const newText = new TextContainer(
          item.text,
          item.type,
          textRenderer,
          titleRenderer,
          removeRenderer,
        );
        texts.push(newText)
        this.addItem(newText.getTextContainer());
      },
    },
    ".content"
  );
  header.innitialRender();
section.rednerItems();
}

initialPageRender()


const textRenderer = function (evt) {
  const addedText = new TextContainer(
    "Введите текст",
    "article",
    textRenderer,
    titleRenderer,
    removeRenderer
  );
  texts.push(addedText)
  section.addnewItem(addedText.getTextContainer(), evt.target.closest(".section"));
};

const titleRenderer = function (evt) {
  const addedText = new TextContainer(
    "Заголовок",
    "title",
    textRenderer,
    titleRenderer,
    removeRenderer
  );
  texts.push(addedText)
  section.addnewItem(addedText.getTextContainer(), evt.target.closest(".section"));
};
const removeRenderer = function () {
  if (Array.from(document.querySelectorAll('.section')).length === 0) {
  const addedText = new TextContainer(
    "Введите текст",
    "article",
    textRenderer,
    titleRenderer,
    removeRenderer
  );
  texts.push(addedText)
  section.addItem(addedText.getTextContainer());
  }
};


export function saveChanges() {
  const sectionElements = Array.from(
    document.querySelectorAll(".title, .article")
  );
  const sections = [];
  sectionElements.forEach((item) => {
    sections.push({ text: item.textContent, type: item.classList.value });
  });
  storage.refreshStorage("sections", sections);
  const mainTitle = {
    title: document.querySelector(".main-title").textContent,
    img: document.querySelector(".icon").getAttribute("src"),
  };
  storage.refreshStorage("mainTitle", mainTitle);
}

const dropFunction = (evt) => {
  evt.preventDefault();
  const text = evt.dataTransfer.getData("text");
  const textClass = evt.dataTransfer.getData("class");
  const relocatedText = new TextContainer(
    text,
    textClass,
    textRenderer,
    titleRenderer,
    removeRenderer,
  );
  texts.push(relocatedText)
  section.addnewItem(relocatedText.getTextContainer(), evt.target.closest(".section"));
  texts.forEach((item)=> {
    item._deleteElement()
  })
  Array.from(document.querySelectorAll(".title, .article")).forEach(
    (item) => {
      item.closest(".section").classList.remove("section_transformed");
    }
  );
};
document.querySelector(".content").addEventListener("drop", dropFunction);
export const setListeners = function () {
  Array.from(document.querySelectorAll(".title, .article")).forEach((item) => {
    item.addEventListener("dragenter", (evt) => {
      evt.target.closest(".section").classList.add("section_transformed");
    });
    item.addEventListener("dragleave", (evt) => {
      evt.stopPropagation();
      evt.target.closest(".section").classList.remove("section_transformed");
    });
    
  });
};

document.querySelector('.reset').addEventListener('click', (evt) => {
  localStorage.clear()
  Array.from(document.querySelectorAll(".title, .article")).forEach((item) => {
    item.remove()
    
  });
  initialPageRender()
})
export {header, section}