// modal.js

// Функция для открытия модального окна
export function openModal(popup) {
  popup.classList.add('popup_is-opened');
  popup.classList.add('popup_is-animated');
  addClosePopupHandler(popup);
}

// Функция для закрытия модального окна
export function closeModal(popup) {
  popup.classList.remove('popup_is-opened');
  popup.classList.add('popup_is-animated');
  removeEventListeners(popup);
}

// Функция для добавления обработчиков закрытия модального окна
function addClosePopupHandler(popup) {
  document.addEventListener('keydown', handleKeyDown);
  popup.addEventListener('click', handleClick);
}

// Обработчик закрытия модального окна клавишей Escape
export function handleKeyDown(evt) {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_is-opened');
    if (openPopup) {
      closeModal(openPopup);
    }
  }
}

// Обработчик закрытия модального окна кликом
export function handleClick(evt) {
  const openPopup = document.querySelector('.popup_is-opened');
  if (evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup')) {
    closeModal(openPopup);
  }
}

// Функция для удаления обработчиков закрытия модального окна
function removeEventListeners(popup) {
  popup.removeEventListener('click', handleClick);
  document.removeEventListener('keydown', handleKeyDown);
}

// Функция открытия попапа изображения
export function openImagePopup(card) {
  const popupImg = document.querySelector('.popup_type_image');
  const popupCaption = document.querySelector('.popup__caption');

  openModal(popupImg);
  setImagePopupContent(card, popupImg, popupCaption);
  addImagePopupEventListeners(popupImg);
}

// Функция установки содержимого попапа изображения
function setImagePopupContent(card, popupImg, popupCaption) {
  popupImg.querySelector('.popup__image').src = card.querySelector('.card__image').src;
  popupCaption.textContent = card.querySelector('.card__title').textContent;
}

// Функция добавления обработчиков событий для попапа изображения
function addImagePopupEventListeners(popupImg) {
  popupImg.addEventListener('click', closeImageClick);
  document.addEventListener('keydown', closeImageKey);
}

// Функция закрытия изображения клавишей Escape
export function closeImageKey(evt) {
  if (evt.key === 'Escape') {
    const popupImg = document.querySelector('.popup_type_image');
    closeModal(popupImg);
    removeImagePopupEventListeners(popupImg);
  }
}

// Функция закрытия изображения кликом
export function closeImageClick(evt) {
  const popupImg = document.querySelector('.popup_type_image');
  if (evt.target.className === 'popup__close' || evt.target.classList.contains('popup_type_image')) {
    closeModal(popupImg);
    removeImagePopupEventListeners(popupImg);
  }
}

// Функция удаления обработчиков событий для попапа изображения
function removeImagePopupEventListeners(popupImg) {
  popupImg.removeEventListener('click', closeImageClick);
  document.removeEventListener('keydown', closeImageKey);
}
