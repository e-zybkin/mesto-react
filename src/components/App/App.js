import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ImagePopup from '../ImagePopup/ImagePopup';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup';
import EditAvatarPopup from '../EditAvatarPopup/EditAvatarPopup';
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

  function handleUpdateUser(formData) {
    api.setUserData(formData)
      .then(result => {
        setCurrentUser(result);
        closeAllPopups();
        formData.close();
      })
      .catch(error => {
        console.log('ОШИБКА: ', error);
      })
  }

  function handleUpdateAvatar(formData) {
    api.setUserAvatar(formData)
      .then(result => {
        setCurrentUser(result);
        closeAllPopups();
      })
      .catch(error => {
        console.log('ОШИБКА: ', error);
      })
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

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
      </CurrentUserContext.Provider>
		</div>

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

    <ImagePopup
      card={selectedCard}
      onClose={closeAllPopups}
    />

 	</div>
  );
}

export default App;
