import React from "react";

function ImagePopup(props) {
  return(
    <div className={`popup popup_type_picture ${(!!props.card.name && !!props.card.link) ? 'popup_opened' : ''}`}>
			<div className="popup__picture-content">
				<button type="button" onClick={props.onClose} className="popup__close-btn buttons"></button>
				<img className="popup__picture-image"
          src={props.card ? props.card.link : ''}
          alt={props.card.name}
        />
				<p className="popup__picture-caption">{props.card.name}</p>
			</div>
		</div>
  );
}

export default ImagePopup;
