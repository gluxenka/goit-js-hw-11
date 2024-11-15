const searchKey = '47095841-45755c038ed861ac306bdd605';
const defaultImageType = 'photo';
const defaultOrientation = 'horizontal';
const enableSafeSearch = true;

const baseApiUrl = `https://pixabay.com/api/`;

export function getPictures(query) {
  const search = getSearchParams(query).toString();
  const url = `${baseApiUrl}?${search}`;

  return fetch(url)
    .then(response => response.json())
    .then(responseBody => responseBody?.hits ?? []);
}

function getSearchParams(query) {
  return new URLSearchParams({
    q: query,
    key: searchKey,
    image_type: defaultImageType,
    orientation: defaultOrientation,
    safesearch: enableSafeSearch,
  });
}
