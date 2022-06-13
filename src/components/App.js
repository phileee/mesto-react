import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard('');
  }

  return (
    <div className="root">

      <Header />

      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>

      <Footer />

      <PopupWithForm name='confirm' title='Вы уверены?' onClose={closeAllPopups}>
        <button className="popup__button" type="submit">Да</button>
      </PopupWithForm>

      <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input className="popup__input" type="url" name="link" id="avatar-url" required placeholder="Сcылка на картинку" />
        <span className="avatar-url-error popup__input-error"></span>
        <button className="popup__button" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name='profile' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input className="popup__input" type="text" name="name" id="popup-username" required minLength="2" maxLength="40" placeholder="Введите имя" />
        <span className="popup-username-error popup__input-error"></span>
        <input className="popup__input" type="text" name="info" id="popup-description" required minLength="2" maxLength="200" placeholder="О себе" />
        <span className="popup-description-error popup__input-error"></span>
        <button className="popup__button" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name='card' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input className="popup__input" type="text" name="name" id="card-name" minLength="2" maxLength="30" required placeholder="Название" />
        <span className="card-name-error popup__input-error"></span>
        <input className="popup__input" type="url" name="link" id="card-url" required placeholder="Сcылка на картинку" />
        <span className="card-url-error popup__input-error"></span>
        <button className="popup__button" type="submit">Создать</button>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

   </div>
  );
}

export default App;
