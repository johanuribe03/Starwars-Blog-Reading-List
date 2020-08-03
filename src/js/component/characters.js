import React from "react";
import PropTypes from "prop-types";

//create your first component
export const Characters = props => {
	const { title, gender, hairColor, eyeColor, buttonText, url, image } = props;
	return (
		<div className="card">
			<img className="card-img-top" src={image} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{gender}</p>
				<p className="card-text2">{hairColor}</p>
				<p className="card-text3">{eyeColor}</p>
				<a href={url} className="btn btn-primary">
					{buttonText}
				</a>
			</div>
		</div>
	);
};

Characters.propTypes = {
	title: PropTypes.string,
	gender: PropTypes.string,
	hairColor: PropTypes.string,
	eyeColor: PropTypes.string,
	buttonText: PropTypes.string,
	url: PropTypes.string,
	image: PropTypes.string
};
