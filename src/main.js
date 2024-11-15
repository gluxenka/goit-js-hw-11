import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { getPictures } from './js/pixabay-api.js';
import { setLoadingText, renderGalleryItems } from './js/render-functions.js';

const searchForm = document.getElementById('search-form');

const galleryViewer = new SimpleLightbox('.gallery-item', {
  captionsData: 'alt',
  captionDelay: 250,
  fadeSpeed: 1000,
});

function startSearch(query) {
  setLoadingText('Loading images, please wait...');

  getPictures(query)
    .then(pictures => {
      renderGalleryItems(pictures);
      galleryViewer.refresh();

      if (pictures.length === 0) {
        iziToast.error({
          message: `Sorry, there are no images matching your search query. Please try again!`,
          position: 'topRight',
          iconColor: '#FFF',
          titleColor: '#FFF',
          messageColor: '#FFF',
          backgroundColor: '#EF4040',
          progressBarColor: '#B51B1B',
        });
      }
    })
    .catch(() => {
      renderGalleryItems([]);
      iziToast.error({
        message: `Request failed, please try again later`,
        position: 'topRight',
        iconColor: '#FFF',
        titleColor: '#FFF',
        messageColor: '#FFF',
        backgroundColor: '#EF4040',
        progressBarColor: '#B51B1B',
      });
    });
}

function handleSearchSubmit(event) {
  event.preventDefault();
  const formData = new FormData(searchForm);
  const formValues = Object.fromEntries(formData);
  startSearch(formValues.query);
}

function init() {
  searchForm.addEventListener('submit', handleSearchSubmit);
}

init();
