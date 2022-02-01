import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import api from "../../utils/api";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser])

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  return(
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <>
        <div className="input-box">
          <input
            required
            minLength="2"
            maxLength="40"
            type="text"
            value={name || ''}
            onChange={handleNameChange}
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
            value={description || ''}
            onChange={handleDescriptionChange}
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
  );
}

export default EditProfilePopup;
