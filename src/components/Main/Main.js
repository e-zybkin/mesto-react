import React from "react";
import api from "../../utils/api";
import Card from "../Card/Card";

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
    .then(([userData, cards]) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
      setCards(cards)
    })
  })

  return(
    <main>
			<section className="profile">
				<div className="profile__cover" onClick={props.onEditAvatar}>
			    <img className="profile__avatar" src={userAvatar} alt="Аватарка профиля" />
				</div>
				<div className="profile__info">
				  <h1 className="profile__name">{userName}</h1>
				  <button type="button" onClick={props.onEditProfile} className="profile__edit-button buttons"></button>
				  <p className="profile__about">{userDescription}</p>
				</div>
				<button type="button" onClick={props.onAddPlace} className="profile__add-button buttons"></button>
			</section>

			<section className="elements-grid">
        {cards.map((card, i) => (
          <Card
            key={card._id}
            link={card.link}
            name={card.name}
            likes={card.likes}
            card={card}
            onCardClick={props.onCardClick}
          />
        ))}
			</section>
		</main>
  );
}

export default Main;
