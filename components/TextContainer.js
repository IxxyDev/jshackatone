export default class TextContainer {
    constructor(text, textClass, newTextRenderer, newTitleRenderer) {
        this._text = text; 
       // this._textClass = textClass;
        this._element = document.querySelector(`#${textClass}`).content.cloneNode(true);
        this._textElement = this._element.querySelector(`.${textClass}`);
        this._addTextButton = this._element.querySelector('button[name="text"]');
        this._addTitleButton = this._element.querySelector('button[name="title"]');
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

    _editText() {

    }

    _setEventListeners() {
      this._addTextButton.addEventListener('click', (evt) => {
        this._addNewText(evt);
      })
      this._addTitleButton.addEventListener('click', (evt) => {
        this._addNewTitle(evt);
      })
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