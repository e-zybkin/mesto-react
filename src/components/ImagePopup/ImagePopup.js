import React from "react";

function ImagePopup() {
  return(
    <div className="popup popup_type_picture">
			<div className="popup__picture-content">
				<button type="button" className="popup__close-btn buttons"></button>
				<img className="popup__picture-image" />
				<p className="popup__picture-caption"></p>
			</div>
		</div>
  );
}

export default ImagePopup;
