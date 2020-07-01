export default class TextContainer {
    constructor(text, textClass, newTextRenderer, newTitleRenderer) {
        this._text = text; 
       // this._textClass = textClass;
        this._element = document.querySelector(`#${textClass}`).content.cloneNode(true);
        this._textElement = this._element.querySelector(`.${textClass}`);
        this._addTextButton = this._element.querySelector('button[name="text"]');
        this._addTitleButton = this._element.querySelector('button[name="title"]');
        this._deleteButton = this._element.querySelector('button[name="delete"]');
        this._newTextRenderer = newTextRenderer;
        this._newTitleRenderer = newTitleRenderer;
    }
    relocate() {
        
    }

    _addNewText(evt) {
      this._newTextRenderer(evt);
    }

    _addNewTitle(evt) {
      this._newTitleRenderer(evt);
    }

    _deleteElement(evt) {
      this._removeEventListeners()
      evt.target.closest('.section').remove();
    }

    _removeEventListeners() {
      this._addTextButton.removeEventListener('click', this._addTextCallback);
      this._addTitleButton.removeEventListener('click', this._addTitleCallback);
      this._deleteButton.removeEventListener('click', this._deleteCallback);
    }
    _setEventListeners() {
      this._addTextCallback =  (evt) => {
        this._addNewText(evt);
      } 
      this._addTitleCallback =  (evt) => {
        this._addNewTitle(evt);
      }
      this._deleteCallback = (evt) => {
        this._deleteElement(evt)
      }
      this._addTextButton.addEventListener('click', this._addTextCallback);
      this._addTitleButton.addEventListener('click', this._addTitleCallback);
      this._deleteButton.addEventListener('click', this._deleteCallback);
    }

    _setText(text) {
        this._textElement.textContent = text;
    }

    getTextContainer() {
        this._setEventListeners();
        this._setText(this._text);
        return this._element;
    }
}