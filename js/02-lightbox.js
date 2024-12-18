import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const ulGallery = document.querySelector('ul.gallery');

const markUp = galleryItems.map(item => {
    return `
    <li class="gallery__item">
        <a class="gallery__link"
            href="${item.original}">
            <img class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
            />
        </a>
    </li>
    `
}).join('');
// console.log(markUp);
ulGallery.insertAdjacentHTML('beforeend', markUp);
