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
// function bobobo(event) {
//     event.preventDefault();
//     console.log('boo');

    // console.log(event.target.alt);

    let lightbox = new SimpleLightbox('.gallery__item a.gallery__link', {
      
        captionsData: 'alt',
        captionDelay: 250,
        animationSpeed: 200,
        scaleImageToRatio: true,
        
        /* options */
});



