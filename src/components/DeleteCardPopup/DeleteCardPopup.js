import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function DeleteCardPopup(props) {

  function handleSubmit(e) {
    e.preventDefault();
    props.onCardDelete(props.card);
  }

  return(
    <PopupWithForm
      name="delete"
      title="Вы уверены?"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <>
        <button type="submit" className="popup__save-btn">Да</button>
      </>
    </PopupWithForm>
  );
}

export default DeleteCardPopup;
