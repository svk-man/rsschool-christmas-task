import './style.css';
import jsonData from './assets/toys/data';

interface Toy {
  name: string,
  num: string,
  count: string,
  year: string,
  color: string,
  shape: string,
  size: string
}

function createCardItemElement(toysItem: Toy) {
  const cardsItem = document.createElement('div');
  cardsItem.className = 'toys-page__cards__item';
  cardsItem.innerHTML = `<p class="toys-page__cards__item-title">${toysItem.name}</p>
  <img class="toys-page__cards__item-image" src="./assets/toys/${toysItem.num}.png" alt="${toysItem.name}">
  <p class="toys-page__cards__item-property">Количество: <span class="toys-page__cards__item-value">${toysItem.count}</span></p>
  <p class="toys-page__cards__item-property">Год покупки: <span class="toys-page__cards__item-value">${toysItem.year}</span> год</p>
  <p class="toys-page__cards__item-property">Форма игрушки: <span class="toys-page__cards__item-value">${toysItem.shape}</span></p>
  <p class="toys-page__cards__item-property">Цвет игрушки: <span class="toys-page__cards__item-value">${toysItem.color}</span></p>
  <p class="toys-page__cards__item-property">Размер игрушки: <span class="toys-page__cards__item-value">${toysItem.size}</span></p>
  <p class="toys-page__cards__item-property">Любимая: <span class="toys-page__cards__item-value">${toysItem.name ? 'Да' : 'Нет'}</span></p>
  `;
  return cardsItem;
}

const printToysJson = () => {
  const cardsItems : HTMLElement | null = document.querySelector('.toys-page__cards__items');
  cardsItems!.innerHTML = '';

  for (const toysItem of jsonData) {
    cardsItems!.append(createCardItemElement(toysItem));
  }
};

printToysJson();