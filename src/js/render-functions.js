const galleryContainer = document.querySelector('.gallery');

const imageDetails = [
  { label: 'Likes', field: 'likes' },
  { label: 'Views', field: 'views' },
  { label: 'Comments', field: 'comments' },
  { label: 'Downloads', field: 'downloads' },
];

export function setLoadingText(loadingText) {
  galleryContainer.innerHTML = loadingText;
}

export function renderGalleryItems(pictureItems) {
  console.log(pictureItems);
  galleryContainer.innerHTML = pictureItems.map(renderPictureItem).join('');
}

function renderPictureItem(pictureItem) {
  const previewUrl = pictureItem.previewURL;
  const largeImageURL = pictureItem.largeImageURL;
  const alt = pictureItem.tags;
  return `
    <a class="gallery-item" href="${largeImageURL}">


    <img class="gallery-item-image" alt="${alt}" src="${previewUrl}"/>
    <div class="gallery-item-details-container">
      ${imageDetails.map(imgDetail => renderDetailsElement(imgDetail.label, pictureItem[imgDetail.field])).join('')}
    </div>

    </a>`;
}

function renderDetailsElement(label, value) {
  return `
    <div class="gallery-item-details-element">
      <span class="label">${label}</span>
      <span class="value">${value}</span>
    </div>`;
}
