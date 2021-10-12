// import imdb from './imdb.json';
let count = 0;
let col;
let arrow;
const arrowUp = '\u{1F815}';
const arrowDown = '\u{1F817}';

if (count === 0) {
  col = id;
  arrow = arrowDown;
  count += 1;
} else if (count === 1) {
  col = id;
  arrow = arrowUp;
  count += 1;
} else if (count === 2) {
  col = title;
  arrow = arrowDown;
  count += 1;
} else if (count === 3) {
  col = title;
  arrow = arrowUp;
  count += 1;
} else if (count === 4) {
  col = year;
  arrow = arrowDown;
  count += 1;
} else if (count === 5) {
  col = year;
  arrow = arrowUp;
  count += 1;
} else if (count === 6) {
  col = imdb;
  arrow = arrowDown;
  count += 1;
} else if (count === 7) {
  col = imdb;
  arrow = arrowUp;
  count += 1;
} else {
    count = 0;
}

export default function getSortImdb(imdb, styleArrow) {
  imdb.sort((a, b) => {
    if (a.id > b.id) {
      return -1;
    }
    if (a.id < b.id) {
      return 1;
    }
    return 0;
  });
  return imdb;
}

// export default setInterval(() => {
//   getSortImdb(imdb, styleArrow);
// }, 2000);
