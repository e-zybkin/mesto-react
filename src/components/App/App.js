import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ImagePopup from '../ImagePopup/ImagePopup';


function App() {
  const [isEditProfilePopupOpen, setProfile] = React.useState(false);
  const [isAddPlacePopupOpen, setPlace] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatar] = React.useState(false);

  function handleEditAvatarClick() {
    setAvatar(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setProfile(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setPlace(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setProfile(false);
    setPlace(false);
    setAvatar(false);
  }

  return (
	<div className="page">
		<div className="wrapper">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
		</div>

    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      children={
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
      }
    />

    <PopupWithForm
      name="card"
      title="Новое место"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
      children={
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
      }
    />

    <PopupWithForm
      name="delete"
      title="Вы уверены?"
      isOpen={false}
      onClose={closeAllPopups}
      children={
        <>
          <button type="submit" className="popup__save-btn">Да</button>
        </>
      }
    />

    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      children={
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
      }
    />

    <ImagePopup />

		<template className="template__card">
			<article className="elements-grid__element">
				<button type="button" className="elements-grid__delete-button buttons"></button>
				<img className="elements-grid__pic" />
				<div className="elements-grid__group">
					<h2 className="elements-grid__caption"></h2>
					<div className="elements-grid__likes">
            <button type="button" className="elements-grid__like-button"></button>
            <p className="elements-grid__like-counter"></p>
					</div>
				</div>
			</article>
		</template>

 	</div>
  );
}

export default App;
