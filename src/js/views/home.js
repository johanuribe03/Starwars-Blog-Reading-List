// import React, { useState, useEffect, useContext } from “react”;
// import { Link } from “react-router-dom”;
// import PropTypes from “prop-types”;
// import { Context } from “../store/appContext”;
// import { Row } from “../component/row”;

// export const Home = () => {
//     const { store, actions } = useContext(Context);
//     return (
//         <div className="container mt-5">
//             <Row title="Planets" data={store.planets} />
//         </div>
//     );
// };

import React from "react";
import { Characters } from "../component/characters.js";

export default function Home() {
	let characters = [
		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			gender: "Gender: male",
			hairColor: "Hair Color: blond",
			eyeColor: "Eye Color: blue",
			buttonText: "Learn More!",
			url: "#"
		},

		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			gender: "Gender: male",
			hairColor: "Hair Color: blond",
			eyeColor: "Eye Color: blue",
			buttonText: "Learn More!",
			url: "#"
		},
		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			gender: "Gender: male",
			hairColor: "Hair Color: blond",
			eyeColor: "Eye Color: blue",
			buttonText: "Learn More!",
			url: "#"
		},
		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			gender: "Gender: male",
			hairColor: "Hair Color: blond",
			eyeColor: "Eye Color: blue",
			buttonText: "Learn More!",
			url: "#"
		},
		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			gender: "Gender: male",
			hairColor: "Hair Color: blond",
			eyeColor: "Eye Color: blue",
			buttonText: "Learn More!",
			url: "#"
		}
	];

	return (
		<div className="container-fluid">
			<div className="row">
				{characters.map((card, index) => (
					<div className="col-3" key={index}>
						<Characters
							title={card.title}
							gender={card.gender}
							hairColor={card.hairColor}
							eyeColor={card.eyeColor}
							buttonText={card.buttonText}
							url={card.url}
							image={card.image}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
