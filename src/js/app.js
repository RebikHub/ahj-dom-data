import imdb from './imdb.json';
import getSortImdb from './sort';
import setInterval from './sort';

console.log('app started');
console.log(getSortImdb(imdb));
setInterval();
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

// console.log(rowElement.children);
const arrowUp = '\u{1F815}';
const arrowDown = '\u{1F817}';
rowElement.children[0].textContent = `${rowElement.children[0].textContent} ${arrowUp}`;

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
