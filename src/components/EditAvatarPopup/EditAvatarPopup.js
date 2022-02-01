import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      link: avatarRef.current.value,
      close: avatarRef.current.value = ''
    })
  }

  return(
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <>
        <div className="input-box input-box_type_avatar">
          <input
            required
            type="url"
            placeholder="Ссылка на картинку"
            id="avatar-input"
            ref={avatarRef}
            className="popup__input popup__input_type_avatar"
            name="link"
          />
          <span className="popup__input-error avatar-input-error"></span>
				</div>

				<button type="submit" className="popup__save-btn">Сохранить</button>
      </>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
