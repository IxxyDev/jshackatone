import {initialData} from "./data.js"
import Section from "../components/Section.js";
import TextContainer from "../components/TextContainer.js";
import Title from "../components/Title.js";
export const header = new Title(initialData.mainTitle, '.main-title', '.icon');
const textRenderer = function(evt) {
  const addedText = new TextContainer('', 'article', textRenderer, titleRenderer).getTextContainer()
  section.addnewItem(addedText, evt.target.closest('.section'));
}
const titleRenderer = function(evt) {
  const addedText = new TextContainer('', 'title', textRenderer, titleRenderer).getTextContainer()
  section.addnewItem(addedText, evt.target.closest('.section'));
}
export const section = new Section({items: initialData.sections, renderer: function(item) {
    const newText = new TextContainer(item.text, item.type, textRenderer, titleRenderer).getTextContainer()
    this.addItem(newText);
}}, '.content'
)
//export const text = new TextContainer ('asfdsadf', 'article').getTextContainer()
