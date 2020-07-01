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
        const regExp = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif|svg))/i;
        if (regExp.test(img)) {
            this._iconElement.src = img;
            this._favicon.href = img;
        } else {
            this._iconElement.src = this._iconElement.src;
            this._favicon.href = this._favicon.src;
        }
    }
    innitialRender() {
        this.setTitle(this._title);
        this.setTitleImage(this._img);
    }
}