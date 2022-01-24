import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return(
    <article className="elements-grid__element">
      <button type="button" className="elements-grid__delete-button buttons"></button>
      <img className="elements-grid__pic"
        onClick={handleClick}
        src={props.link}
        alt={props.name}
      />
      <div className="elements-grid__group">
        <h2 className="elements-grid__caption">{props.name}</h2>
        <div className="elements-grid__likes">
          <button type="button" className="elements-grid__like-button"></button>
          <p className="elements-grid__like-counter">{props.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;
