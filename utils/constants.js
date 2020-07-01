import { initialData } from "./data.js";
import Section from "../components/Section.js";
import TextContainer from "../components/TextContainer.js";
import Title from "../components/Title.js";
import Storage from "../components/Storage.js";
//localStorage.clear()
const storage = new Storage(initialData);
storage.initialRender();
export const header = new Title(
  storage.getInitialData().mainTitle,
  ".main-title",
  ".icon"
);
const textRenderer = function (evt) {
  const addedText = new TextContainer(
    "Введите текст",
    "article",
    textRenderer,
    titleRenderer,
  ).getTextContainer();
  section.addnewItem(addedText, evt.target.closest(".section"));
};
const titleRenderer = function (evt) {
  const addedText = new TextContainer(
    "Заголовок",
    "title",
    textRenderer,
    titleRenderer,
  ).getTextContainer();
  section.addnewItem(addedText, evt.target.closest(".section"));
};


export const section = new Section(
  {
    items: storage.getInitialData().sections,
    renderer: function (item) {
      const newText = new TextContainer(
        item.text,
        item.type,
        textRenderer,
        titleRenderer,
      ).getTextContainer();
      this.addItem(newText);
    },
  },
  ".content"
);
export function saveChanges() {
  const sectionElements = Array.from(
    document.querySelectorAll(".title, .article")
  );
  const sections = [];
  sectionElements.forEach((item) => {
    sections.push({ text: item.textContent, type: item.classList.value });
  });
  storage.refreshStorage("sections", sections);
  console.log(sections);
  const mainTitle = {
    title: document.querySelector(".main-title").textContent,
    img: document.querySelector(".icon").getAttribute("src"),
  };
  console.log(mainTitle);
  storage.refreshStorage("mainTitle", mainTitle);
}

const dropFunction = (evt) => {
  evt.preventDefault();
  const text = evt.dataTransfer.getData("text");
  const textClass = evt.dataTransfer.getData("class");
  const droppedElement = Array.from(document.querySelectorAll(`.${textClass}`)).find((item) => {
    return item.textContent === text;
  });
  const relocatedText = new TextContainer(
    text,
    textClass,
    textRenderer,
    titleRenderer,
  ).getTextContainer();
  section.addnewItem(relocatedText, evt.target.closest(".section"));
  droppedElement.closest(".section").remove();
  Array.from(document.querySelectorAll(".title, .article")).forEach(
    (item) => {
      item.closest(".section").classList.remove("section_transformed");
    }
  );
};
document.querySelector(".content").addEventListener("drop", dropFunction);
export const setListeners = function () {
  Array.from(document.querySelectorAll(".title, .article")).forEach((item) => {
    console.log(item);
    item.addEventListener("dragenter", (evt) => {
      evt.target.closest(".section").classList.add("section_transformed");
    });
    item.addEventListener("dragleave", (evt) => {
      evt.stopPropagation();
      evt.target.closest(".section").classList.remove("section_transformed");
    });
    
  });
};
