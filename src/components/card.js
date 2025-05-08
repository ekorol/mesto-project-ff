// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
export function createCard(content, deleteCard, likeCard, popupImage) {
  // Клонируем темплейт
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  // Подставляем данные в темплейт
  cardElement.querySelector('.card__image').src = content.link;
  cardElement.querySelector('.card__image').alt = `Фотография места: ${content.name}`;
  cardElement.querySelector('.card__title').textContent = content.name;

  // Добавляем обработчик кнопки удалить
  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', () => deleteCard(cardElement));

  // Добавляем обработчик кнопки лайка
  const likeButton = cardElement.querySelector('.card__like-button');
  likeButton.addEventListener('click', () => likeCard(cardElement));

  // Добавляем обработчик открытия изображения
  const openImage = cardElement.querySelector('.card__image');
  openImage.addEventListener('click', () => popupImage(cardElement));

  // Возвращаем подготовленный для вставки шаблон
  return cardElement;
}

// Функция удаления карточки
export function deleteCard(card) {
  card.remove();
}

// Функция лайка карточки
export function likeCard(card) {
  card.querySelector('.card__like-button').classList.toggle('card__like-button_is-active');
}
