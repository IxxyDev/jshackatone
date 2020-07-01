import { section } from "../utils/constants";

export default class Storage {
  constructor({ mainTitle, sections }) {
    this._mainTitle = mainTitle;
    this._sections = sections;
  }
  refreshStorage(key, value) {
    localStorage[key] = JSON.stringify(value);
  }
  getData(key) {
    return JSON.parse(localStorage[key]);
  }
  getInitialData() {
    const initialStorage = {
      mainTitle: this.getData("mainTitle"),
      sections: this.getData("sections"),
    };
    return initialStorage;
  }

  initialRender() {
    if (!localStorage.mainTitle) {
      this.refreshStorage("mainTitle", this._mainTitle);
    }
    if (!localStorage.sections) {
      this.refreshStorage("sections", this._sections);
    }
  }
}
