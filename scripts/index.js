// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

// Вывод всех карточек
initialCards.forEach(function(item){
  placesList.append(createCard(item, deleteCard));
});

// Функция создания карточки
function createCard(content, deleteCard) {

  // Клонируем темплейт
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  // Подставляем данные в темплейт
  cardElement.querySelector('.card__image').src = content.link;
  cardElement.querySelector('.card__title').textContent = content.name;

  // Добавляем обработчик кнопки удалить
  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', function() {
    deleteCard(cardElement);
  });

  // Возвращаем подготовленный для вставки шаблон
  return cardElement;
};

// Функция удаления карточки
function deleteCard(card) {
  card.remove();
}