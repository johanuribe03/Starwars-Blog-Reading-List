import React from "react";
// import { Navbar } from "../component/navbar.js";
// import { Jumbo } from "./jumbo.js";
import { Characters } from "../component/characters.js";
// import { Footer } from "../component/footer.js";

export default function Home() {
	let characters = [
		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ",
			buttonText: "View",
			url: "#"
		},

		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ",
			buttonText: "View",
			url: "#"
		},
		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ",
			buttonText: "View",
			url: "#"
		},
		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ",
			buttonText: "View",
			url: "#"
		},
		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ",
			buttonText: "View",
			url: "#"
		}
	];

	return (
		<div className="container-fluid">
			<div className="row">
				{characters.map((card, index) => (
					<div className="col-3" key={index}>
						<Characters
							tittle={card.title}
							body={card.body}
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
