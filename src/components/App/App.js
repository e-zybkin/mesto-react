import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
	<div className="page">
		<div className="wrapper">
      <Header />
      <Main />
      <Footer />
		</div>

		<div className="popup popup_type_profile popup_type_others">
			<div className="popup__content">
				<button type="button" className="popup__close-btn buttons"></button>
				<h3 className="popup__title">Редактировать профиль</h3>
				<form className="popup__form popup__form_type_profile" name="changeProfile" noValidate>
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
				</form>
			</div>
		</div>

		<div className="popup popup_type_item popup_type_others">
			<div className="popup__content">
				<button type="button" className="popup__close-btn buttons"></button>
				<h3 className="popup__title">Новое место</h3>
				<form className="popup__form popup__form_type_card" name="addItem" id="cardForm" noValidate>
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
				</form>
			</div>
		</div>

		<div className="popup popup_type_picture">
			<div className="popup__picture-content">
				<button type="button" className="popup__close-btn buttons"></button>
				<img className="popup__picture-image" />
				<p className="popup__picture-caption"></p>
			</div>
		</div>

		<div className="popup popup_type_delete popup_type_others">
			<form className="popup__content popup__delete-content">
				<button type="button" className="popup__close-btn buttons"></button>
				<h3 className="popup__title popup__title_type_del">Вы уверены?</h3>
				<button type="submit" className="popup__save-btn popup__save-btn_type_del">Да</button>
			</form>
		</div>

		<div className="popup popup_type_avatar popup_type_others">
			<div className="popup__content popup__avatar-content">
				<button type="button" className="popup__close-btn buttons"></button>
				<h3 className="popup__title">Обновить аватар</h3>
				<form className="popup__form popup__form_type_avatar" name="changeAvatar" id="avatarForm" noValidate>
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
				</form>
			</div>
		</div>

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
