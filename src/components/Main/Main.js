import React from "react";

function handleEditAvatarClick() {
  document.querySelector('.popup_type_avatar').classList.add('popup_opened');
}

function handleEditProfileClick() {
  document.querySelector('.popup_type_profile').classList.add('popup_opened');
}

function handleAddPlaceClick() {
  document.querySelector('.popup_type_item').classList.add('popup_opened');
}

function Main() {
  return(
    <main>
				<section className="profile">
					<div className="profile__cover" onClick={handleEditAvatarClick}>
				    <img className="profile__avatar" src="#" alt="Аватарка профиля" />
					</div>
					<div className="profile__info">
					  <h1 className="profile__name"></h1>
					  <button type="button" onClick={handleEditProfileClick} className="profile__edit-button buttons"></button>
					  <p className="profile__about"></p>
					</div>
					<button type="button" onClick={handleAddPlaceClick} className="profile__add-button buttons"></button>
				</section>

				<section className="elements-grid">
				</section>
			</main>
  );
}

export default Main;
