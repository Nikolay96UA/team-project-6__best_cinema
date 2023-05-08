import { BASE_URL, API_KEY, URL_TREND_WEEK, URL_GENRE_LIST } from '../constants/api';
import axios from 'axios';
import { pagInstance } from './pagination';

let currentPage = 1;
let genresListArray = [];
let idsArray = [];
let categorysArray = [];
const galleryEl = document.getElementById('gallery');

getMoviesWeekAndGenreList();
async function getMoviesWeekAndGenreList() {
  try {
    const { data: moviesObject } = await axios.get(
      `${BASE_URL}${URL_TREND_WEEK}?api_key=${API_KEY}&page=${currentPage}`
    );

    // console.log('tenPaginationArr', tenPaginationArr);
    // console.log('twentyPaginationArr', twentyPaginationArr);
    const { data: genresObject } = await axios.get(
      `${BASE_URL}${URL_GENRE_LIST}?api_key=${API_KEY}`
    );
    console.log('result object', moviesObject);
    genresListArray = genresObject.genres;
    for (let i = 0; i < genresListArray.length; i += 1) {
      idsArray.push(genresListArray[i].id);
      categorysArray.push(genresListArray[i].name);
    }
    // console.log('idsArray', idsArray);
    // console.log('categorysArray', categorysArray);
    // console.log('genresListArray', genresListArray);
    createMarkUp(moviesObject.results);
  } catch (error) {
    console.log(error);
  }
}

export function createMarkUp(array) {
  const markup = array
    .map(({ title, genre_ids, release_date, poster_path, vote_average }) => {
      return `<li class="gallery-item" style="background-image: url(https://image.tmdb.org/t/p/w500${poster_path})"><div class="gallery-item__about"><h3 class="gallery-item__about__title">${title}</h3><p class="gallery-item__about__p">${getGenreForCard(
        genre_ids
      )} | ${release_date.slice(0, 4)}</p></div><div class="vote-cinemas ${stars(
        vote_average.toFixed(2)
      )}"></div></li>`;
    })
    .join('');
  renderMarkup(markup);
}
function renderMarkup(markup) {
  galleryEl.innerHTML = markup;
}

function getGenreForCard(genreIds) {
  // console.log('genreListArray', genresListArray);
  // console.log('data[0].name', genresListArray[0].name);
  // console.log('genreId', genreId);
  const genreArr = [];
  for (let i = 0; i <= genreIds.length; i += 1) {
    if (idsArray.includes(genreIds[i])) {
      const indx = idsArray.indexOf(genreIds[i]);
      genreArr.push(categorysArray[indx]);
    }
  }
  while (genreArr.length > 2) {
    genreArr.pop();
    // console.log('length is more than 2');
  }
  return genreArr.join(', ');
}
// <div class="for-img"></div>
// style="background-image: url(https://image.tmdb.org/t/p/w500${poster_path})"

pagInstance.on('beforeMove', event => {
  const { page: pagPage } = event;
  console.log(pagPage);
  if (pagPage === 2) {
    pagInstance.movePageTo(3);
    console.log(pagPage);
  }
});
// pagInstance.on('afterMove', ({ page: pagPage }) => console.log(pagPage));
function stars(vote) {
  if (vote === 10) {
    return 'ten-stars';
  } else if (vote < 10 && vote > 8) {
    return 'nine-stars';
  } else if (vote === 8) {
    return 'eight-stars';
  } else if (vote < 8 && vote > 6) {
    return 'seven-stars';
  } else if (vote === 6) {
    return 'six-stars';
  } else if (vote < 6 && vote > 4) {
    return 'five-stars';
  } else if (vote === 4) {
    return 'four-stars';
  } else if (vote < 4 && vote > 2) {
    return 'three-stars';
  } else if (vote === 2) {
    return 'two-stars';
  } else if (vote < 2 && vote > 0) {
    return 'one-star';
  } else if (vote === 0) {
    return 'zero-star';
  } else if (!vote) {
    return 'No rating';
  }
}
