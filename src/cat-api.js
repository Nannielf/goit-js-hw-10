const URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_54dNfnuYCnG36G3UGBLEA8BGuXj8ipkke5SfBSpJdSxTnAKXkFz2Hh3Z12I7zxhn';

export function fetchBreeds() {
  return fetch(`${URL}/breeds?api_key=${API_KEY}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
    .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}