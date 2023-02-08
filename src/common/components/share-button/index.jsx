import React from "react";
import ShareIcon from "../../assets/images/share.svg";
import "./share-button.css";

const ShareButton = () => {
	return (
		<button className="btn btn-share d-flex">
			<img src={ShareIcon} alt="share-icon" />
			<span className="mx-2">Share</span>
		</button>
	);
};

export default ShareButton;
