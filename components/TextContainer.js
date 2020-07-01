export default class TextContainer {
  constructor(
    text,
    textClass,
    newTextRenderer,
    newTitleRenderer,
    removeRenderer
  ) {
    this._text = text;
    this._textClass = textClass;
    this._element = document
      .querySelector(`#${textClass}`)
      .content.cloneNode(true);
    this._textElement = this._element.querySelector(`.${textClass}`);
    this._addTextButton = this._element.querySelector('button[name="text"]');
    this._addTitleButton = this._element.querySelector('button[name="title"]');
    this._deleteButton = this._element.querySelector('button[name="delete"]');
    this._relocateButton = this._element.querySelector(
      'button[name="relocate"]'
    );
    this._newTextRenderer = newTextRenderer;
    this._newTitleRenderer = newTitleRenderer;
    this._removeRenderer = removeRenderer;
  }

  _addNewText(evt) {
    this._newTextRenderer(evt);
  }

  _addNewTitle(evt) {
    this._newTitleRenderer(evt);
  }

  _deleteElement(element) {
    if (element) {
      this._removeEventListeners();
      element.remove();
    } else if (this._deletedElement) {
      this._removeEventListeners();
      this._deletedElement.remove();
    }

    this._removeRenderer();
  }

  _removeEventListeners() {
    this._addTextButton.removeEventListener("click", this._addTextCallback);
    this._addTitleButton.removeEventListener("click", this._addTitleCallback);
    this._deleteButton.removeEventListener("click", this._deleteCallback);
  }

  _setEventListeners() {
    this._addTextCallback = (evt) => {
      this._addNewText(evt);
    };
    this._addTitleCallback = (evt) => {
      this._addNewTitle(evt);
    };
    this._deleteCallback = (evt) => {
      this._deleteElement(evt.target.closest(".section"));
    };
    this._addTextButton.addEventListener("click", this._addTextCallback);
    this._addTitleButton.addEventListener("click", this._addTitleCallback);
    this._deleteButton.addEventListener("click", this._deleteCallback);

    this._relocateButton.addEventListener("dragstart", (evt) => {
      this._deletedElement = evt.target.closest(".section");
      evt.dataTransfer.setData("text", this._text);
      evt.dataTransfer.setData("class", this._textClass);
      evt.target.closest(".section").style.opacity = "0.4";
    });
    this._relocateButton.addEventListener("dragend", (evt) => {
      evt.target.closest(".section").style.opacity = "1";
    });
  }

  _setText(text) {
    this._textElement.textContent = text;
  }

  getTextContainer() {
    this._setText(this._text);
    this._setEventListeners();
    return this._element;
  }
}
