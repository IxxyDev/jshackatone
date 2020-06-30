import "../pages/index.css";
import Section from "../components/Section.js";
import TextContainer from "../components/TextContainer.js";
import Title from "../components/Title.js";
import {header, section} from "../utils/constants.js";
header.innitialRender();
section.rednerItems();

function dragStart(e) {
    this.style.opacity = '0.6';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  };

  function dragEnter() {
    this.classList.add('section_transformed');
  }
  
  function dragLeave(evt) {
    evt.stopPropagation();
    this.classList.remove('section_transformed');
  }

  function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  function dragDrop(e) {
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
  }

  function dragEnd() {
    let listItens = document.querySelectorAll('p[draggable]');
    [].forEach.call(listItens, function(item) {
      item.classList.remove('over');
    });
    this.style.opacity = '1';
  }

  function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart, false);
    el.addEventListener('dragenter', dragEnter, false);
    el.addEventListener('dragover', dragOver, false);
    el.addEventListener('dragleave', dragLeave, false);
    el.addEventListener('drop', dragDrop, false);
    el.addEventListener('dragend', dragEnd, false);
  }

  let listItens = document.querySelectorAll('p[draggable]');
[].forEach.call(listItens, function(item) {
  addEventsDragAndDrop(item);
});