import "../pages/index.css";
import Section from "../components/Section.js";
import TextContainer from "../components/TextContainer.js";
import Title from "../components/Title.js";
import {header, section, saveChanges, setListeners} from "../utils/constants.js";
header.innitialRender();
section.rednerItems();
//saveChanges()
window.addEventListener('beforeunload', saveChanges)
setListeners()

