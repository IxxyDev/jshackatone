export default class Title {
    constructor({title, img}, titleSelector, iconSelector) {
        this._title = title;
        this._img = img;
        this._titleElement = document.querySelector(titleSelector);
        this._iconElement = document.querySelector(iconSelector);
        this._favicon = document.querySelector('link[rel ="shortcut icon"]');
    }
    setTitle(text) {
        this._titleElement.textContent = text;
    }
    setTitleImage(img) {
        this._iconElement.src = img;
        this._favicon.href = img;
    }
    innitialRender() {
        this.setTitle(this._title);
        this.setTitleImage(this._img);
    }
}