import "../pages/index.css";
import Section from "../components/Section.js";
import TextContainer from "../components/TextContainer.js";
import Title from "../components/Title.js";
import {header, section, saveChanges} from "../utils/constants.js";
header.innitialRender();
section.rednerItems();
//saveChanges()
window.addEventListener('beforeunload', saveChanges);
const input = document.querySelector('.popup__input');
const popup = document.querySelector('.popup');
function openPopup() {
    input.value = '';
    popup.classList.add('popup_is-opened');
}

function closePopup() {
    popup.classList.remove('popup_is-opened');
}

function handleSubmitClick(evt) {
    evt.preventDefault();
    document.querySelector('.icon').src = input.value;
    closePopup();
}

function escClose(evt) {
    const openedPopup = document.querySelector('.popup_is-opened'); 
    if(evt.key === 'Escape') {
        closePopup(openedPopup);
    }
}

function clickClose (evt) { 
    if (evt.target.classList.contains('popup')) { 
    closePopup(evt.target); 
    } 
}

document.querySelector('.icon').addEventListener('click', openPopup);
document.addEventListener('keyup', escClose);
document.addEventListener('mousedown', clickClose);
document.querySelector('.popup__form').addEventListener('submit', handleSubmitClick)