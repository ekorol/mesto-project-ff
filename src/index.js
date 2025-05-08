// index.js

import './pages/index.css';
import { initialCards } from './scripts/cards.js';
import logoImage from './images/logo.svg';
import { createCard, deleteCard, likeCard } from './components/card.js';
import { openModal, closeModal, openImagePopup } from './components/modal.js';

const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: 'logo', link: logoImage }
];

// Контейнер для вставки карточек
const placesList = document.querySelector('.places__list');

// Вывод всех карточек
initialCards.forEach(item => {
  placesList.append(createCard(item, deleteCard, likeCard, openImagePopup));
});

// Объявление глобальной переменной закрытия попапов
let closePopupBtn;

// Объявление переменных информации профиля
let profileName = document.querySelector('.profile__title');
let profileDescription = document.querySelector('.profile__description');

// Функция вставки информации профиля в форму
function insertProfileInfo() {
  const formElement = document.forms['edit-profile'];
  const nameInput = formElement['name'];
  const jobInput = formElement['description'];

  // Устанавливаем значение полей ввода
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;

  // Обработчик отправки формы
  function handleFormSubmit(evt) {
    evt.preventDefault();
    const name = nameInput.value;
    const job = jobInput.value;

    // Обновляем информацию профиля на странице
    profileName.textContent = name;
    profileDescription.textContent = job;

    // Закрываем попап
    closeModal(closePopupBtn);
  }

  // Прикрепляем обработчик к форме
  formElement.addEventListener('submit', handleFormSubmit);
}

// Объявление переменных формы добавления новой карточки
const newPlace = document.forms['new-place'];
const placeName = newPlace['place-name'];
const link = newPlace['link'];

// Функция обработки отправки формы добавления новой карточки
function handleFormSubmit(evt) {
  evt.preventDefault();
  const name = placeName.value;
  const linkImg = link.value;

  // Добавляем новую карточку в начало списка
  placesList.prepend(createCard({ name: name, link: linkImg }, deleteCard, likeCard, openImagePopup));

  // Очищаем поля ввода
  placeName.value = '';
  link.value = '';

  // Закрываем попап
  closeModal(closePopupBtn);
}

// Прикрепляем обработчик к форме:
newPlace.addEventListener('submit', handleFormSubmit);

// Прослушивание и вызов попапа редактирования профиля
const editBtn = document.querySelector('.profile__edit-button');
editBtn.addEventListener('click', () => {
  closePopupBtn = document.querySelector('.popup_type_edit');
  openModal(closePopupBtn);
  insertProfileInfo();
});

// Прослушивание и вызов попапа добавления карточки
const addCard = document.querySelector('.profile__add-button');
addCard.addEventListener('click', () => {
  closePopupBtn = document.querySelector('.popup_type_new-card');
  openModal(closePopupBtn);
});
