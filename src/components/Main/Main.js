import React from "react";
import api from "../../utils/api";
import Card from "../Card/Card";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main(props) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api.getInitialCards()
      .then(result => {
        setCards(result)
      })
      .catch(error => {
        console.log('ОШИБКА: ', error)
      })
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card)
      .then(result => {
        setCards((state) => state.filter((c) => c._id !== card._id))
      });
  }

  return(
    <main>
			<section className="profile">
				<div className="profile__cover" onClick={props.onEditAvatar}>
			    <img className="profile__avatar" src={currentUser.avatar} alt="Аватарка профиля" />
				</div>
				<div className="profile__info">
				  <h1 className="profile__name">{currentUser.name}</h1>
				  <button type="button" onClick={props.onEditProfile} className="profile__edit-button buttons"></button>
				  <p className="profile__about">{currentUser.about}</p>
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
            ownerId={card.owner._id}
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
			</section>
		</main>
  );
}

export default Main;
