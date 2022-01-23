import React from "react";

function Main(props) {
  return(
    <main>
				<section className="profile">
					<div className="profile__cover" onClick={props.onEditAvatar}>
				    <img className="profile__avatar" src="#" alt="Аватарка профиля" />
					</div>
					<div className="profile__info">
					  <h1 className="profile__name"></h1>
					  <button type="button" onClick={props.onEditProfile} className="profile__edit-button buttons"></button>
					  <p className="profile__about"></p>
					</div>
					<button type="button" onClick={props.onAddPlace} className="profile__add-button buttons"></button>
				</section>

				<section className="elements-grid">
				</section>
			</main>
  );
}

export default Main;
