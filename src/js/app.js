import imdb from './imdb.json';
// import getSortImdb from './sort';
// import setInterval from './sort';

console.log('app started');
// setInterval();
let count = 0;
const arrowUp = '\u{1F815}';
const arrowDown = '\u{1F817}';
const html = `
<tr>
  <td>id</td>
  <td>title</td>
  <td>year</td>
  <td>imdb</td>
</tr>
`;
const imdbList = document.getElementById('imdb-list');

imdbList.firstElementChild.innerHTML = html;

const rowElement = imdbList.firstElementChild.firstElementChild;

for (let i = 0; i < imdb.length; i += 1) {
  const cloneTr = rowElement.cloneNode();
  cloneTr.dataset.id = imdb[i].id;
  cloneTr.dataset.title = imdb[i].title;
  cloneTr.dataset.year = imdb[i].year;
  cloneTr.dataset.imdb = `imdb: ${imdb[i].imdb.toFixed(2)}`;
  cloneTr.classList.add('with-data');
  imdbList.firstElementChild.appendChild(cloneTr);
}

const list = Array.from(document.querySelectorAll('.with-data'));

list.forEach((elem) => {
  const cloneTdId = rowElement.firstElementChild.cloneNode();
  const cloneTdTitle = rowElement.firstElementChild.cloneNode();
  const cloneTdYear = rowElement.firstElementChild.cloneNode();
  const cloneTdImdb = rowElement.firstElementChild.cloneNode();
  cloneTdId.textContent = elem.dataset.id;
  elem.appendChild(cloneTdId);
  cloneTdTitle.textContent = elem.dataset.title;
  elem.appendChild(cloneTdTitle);
  cloneTdYear.textContent = elem.dataset.year;
  elem.appendChild(cloneTdYear);
  cloneTdImdb.textContent = elem.dataset.imdb;
  elem.appendChild(cloneTdImdb);
});

console.log(list);

function sorting(col, arrow, imdb) {
  console.log(col);
  if (col === 'id' && arrow === arrowUp) {
    rowElement.children[0].textContent = `${rowElement.children[0].textContent} ${arrow}`;
  } else if (col === 'title') {
    rowElement.children[0].textContent = `${rowElement.children[0].textContent} ${arrow}`;
  } else if (col === 'year') {
    rowElement.children[0].textContent = `${rowElement.children[0].textContent} ${arrow}`;
  } else if (col === 'imdb') {
    rowElement.children[0].textContent = `${rowElement.children[0].textContent} ${arrow}`;
  }

  imdb.sort((a, b) => {
    if (a.dataset[col] > b.dataset[col]) {
      return -1;
    }
    if (a.dataset[col] < b.dataset[col]) {
      return 1;
    }
    return 0;
  });
}

function getSortImdb(imdb) {
  if (count === 0) {
    sorting('id', arrowDown, imdb);
    count += 1;
  } else if (count === 1) {
    sorting('id', arrowUp, imdb);
    count += 1;
  } else if (count === 2) {
    sorting('title', arrowDown, imdb);
    count += 1;
  } else if (count === 3) {
    sorting('title', arrowUp, imdb);
    count += 1;
  } else if (count === 4) {
    sorting('year', arrowDown, imdb);
    count += 1;
  } else if (count === 5) {
    sorting('year', arrowUp, imdb);
    count += 1;
  } else if (count === 6) {
    sorting('imdb', arrowDown, imdb);
    count += 1;
  } else if (count === 7) {
    sorting('imdb', arrowUp, imdb);
    count += 1;
  } else {
    count = 0;
  }
  console.log(imdb[0].dataset['id']);
  console.log(count);
}

// getSortImdb(list);

let listId = list.sort((a, b) => {
  Number(a.dataset['id'])
  Number(b.dataset['id'])
  console.log(typeof a.dataset['id']);
  console.log(typeof b.dataset['id']);
  if (a.dataset['id'] > b.dataset['id']) {
    return 1;
  }
  if (a.dataset['id'] < b.dataset['id']) {
    return -1;
  }
  return 0;
});
const tbody = document.querySelector('tbody');
// list.forEach((elem) => {
//   elem.removeChild()
// })
console.log(tbody);
console.log(list, listId);
// tbody.replaceChild(...list, ...listId);
