import {initialData} from "./data.js"
import Section from "../components/Section.js";
import TextContainer from "../components/TextContainer.js";
import Title from "../components/Title.js";
import Storage from "../components/Storage.js";
/*  localStorage.clear() */ 
const storage = new Storage (initialData);
storage.initialRender();
console.log(storage.getInitialData())
export const header = new Title(storage.getInitialData().mainTitle, '.main-title', '.icon');
const textRenderer = function(evt) {
  const addedText = new TextContainer('Введите текст', 'article', this._id+1,  textRenderer, titleRenderer).getTextContainer()
  section.addnewItem(addedText, evt.target.closest('.section'));
}
const titleRenderer = function(evt) {
  const addedText = new TextContainer('Заголовок', 'title', this._id+1, textRenderer, titleRenderer).getTextContainer()
  section.addnewItem(addedText, evt.target.closest('.section'));
}
export const section = new Section({items: storage.getInitialData().sections, renderer: function(item, id) {
    const newText = new TextContainer(item.text, item.type, id, textRenderer, titleRenderer).getTextContainer()
    this.addItem(newText);
}}, '.content'
)


