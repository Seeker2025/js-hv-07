import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const ulGallery = document.querySelector('ul.gallery');
// console.log(ulGallery);
let oneItm;
const ESCAPE = 'Escape';
const markUp = galleryItems.map(item => {
    return `
    <li class="gallery__item">
    <a class="gallery__link "
    href="">
    <img
      class="gallery__image "
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
    </a>
    </li>
    `
}).join('');
// console.log(markUp);
ulGallery.insertAdjacentHTML('beforeend', markUp);

ulGallery.addEventListener('click', onClickFun);

function onClickFun(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    // console.log("Hi!");
    return;
  }
  oneItm = event.target.dataset.source;
  console.log(oneItm);

const instance = basicLightbox.create(`
    <img src="${oneItm}" width="800" height="600">

`)
  instance.show();

 document.addEventListener('keydown', keyEsc);
  function keyEsc(event) {
  if (ESCAPE === event.code) {
    console.log("Hi!");
    instance.close();
  }
};
  // document.removeEventListener('keydown', keyEsc);
  
}
