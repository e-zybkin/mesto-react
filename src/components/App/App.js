import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ImagePopup from '../ImagePopup/ImagePopup';
import api from '../../utils/api';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function App() {
  const [isEditProfilePopupOpen, setProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserData()
      .then(result => {
        setCurrentUser(result);
      })
      .catch(error => {
        console.log('ОШИБКА: ', error)
      })
  }, [])

  function handleEditAvatarClick() {
    setAvatarPopup(true);
  }

  function handleEditProfileClick() {
    setProfilePopup(true);
  }

  function handleAddPlaceClick() {
    setPlacePopup(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setProfilePopup(false);
    setPlacePopup(false);
    setAvatarPopup(false);
    setSelectedCard({});
  }

  return (
	<div className="page">
		<div className="wrapper">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </CurrentUserContext.Provider>
		</div>

    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
    >
      <>
        <div className="input-box">
          <input
            required
            minLength="2"
            maxLength="40"
            type="text"
            placeholder="Имя профиля"
            id="name-input"
            className="popup__input popup__input_type_name"
            name="name"
          />

          <span className="popup__input-error name-input-error"></span>
        </div>

        <div className="input-box">
          <input
            required
            minLength="2"
            maxLength="200"
            type="text"
            placeholder="Статус"
            id="status-input"
            className="popup__input popup__input_type_status"
            name="status"
          />
          <span className="popup__input-error status-input-error"></span>
        </div>

        <button type="submit" className="popup__save-btn">Сохранить</button>
      </>
    </PopupWithForm>

    <PopupWithForm
      name="card"
      title="Новое место"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
    >
      <>
        <div className="input-box">
          <input
            required
            minLength="2"
            maxLength="30"
            type="text"
            placeholder="Название"
            id="place-input"
            className="popup__input popup__input_type_title"
            name="name"
          />

          <span className="popup__input-error place-input-error"></span>
				</div>

				<div className="input-box">
          <input
            required
            type="url"
            placeholder="Ссылка на картинку"
            id="pic-input"
            className="popup__input popup__input_type_pic"
            name="link"
          />

          <span className="popup__input-error pic-input-error"></span>
				</div>

				<button type="submit" className="popup__save-btn">Создать</button>
      </>
    </PopupWithForm>

    <PopupWithForm
      name="delete"
      title="Вы уверены?"
      isOpen={false}
      onClose={closeAllPopups}
    >
      <>
        <button type="submit" className="popup__save-btn">Да</button>
      </>
    </PopupWithForm>

    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
    >
      <>
        <div className="input-box input-box_type_avatar">
          <input
            required
            type="url"
            placeholder="Ссылка на картинку"
            id="avatar-input"
            className="popup__input popup__input_type_avatar"
            name="link"
          />
          <span className="popup__input-error avatar-input-error"></span>
				</div>

				<button type="submit" className="popup__save-btn">Сохранить</button>
      </>
    </PopupWithForm>

    <ImagePopup
      card={selectedCard}
      onClose={closeAllPopups}
    />

 	</div>
  );
}

export default App;
