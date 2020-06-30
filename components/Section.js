export default class Section {
    constructor({items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    }
    addItem(item) {
        
    }
    rednerItems() {
        this._items.forEach(element => {
            this._renderer(element)
        });
    }
}