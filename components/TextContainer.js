export default class TextContainer {
    constructor(text, textClass) {
        this._text = text; 
       // this._textClass = textClass;
        this._element = document.querySelector(`#${textClass}`).content.cloneNode(true);
        this._textElement = this._element.querySelector(`.${textClass}`);
        this._relocateButton = document.querySelector('[name="relocate"]');
    }
    relocate() {
        
    }

    addNewText() {

    }

    addNewTitle() {

    }

    _editText() {

    }

    _setEventListeners() {
        this._relocateButton.addEventListener()
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