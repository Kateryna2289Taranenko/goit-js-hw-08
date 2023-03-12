import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryEl = document.querySelector('.gallery');
function createGalleryItems(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" 
      href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
    </a>`;
    })
    .join('');
}
const cardsMarkup = createGalleryItems(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', cardsMarkup);
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});
