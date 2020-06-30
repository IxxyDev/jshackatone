export default class Section {
    constructor({items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    addnewItem(item, target) {
      target.after(item)
  }
    addItem(item) {
        this._container.append(item)
    }
    rednerItems() {
        this._items.forEach(element => {
            this._renderer(element)
        });
    }
}