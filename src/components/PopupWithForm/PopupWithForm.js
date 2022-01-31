import React from "react";

function PopupWithForm(props) {
  const popupClass = `popup popup_type_others popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`;

  return(
    <div className={popupClass}>
			<div className={`popup__content popup__${props.name}-content`}>
				<button type="button" onClick={props.onClose} className="popup__close-btn buttons"></button>
				<h3 className="popup__title">{props.title}</h3>
				<form className={`popup__form popup__form_type_${props.name}`} name={props.name} noValidate>
          {props.children}
				</form>
			</div>
		</div>
  );
}

export default PopupWithForm;