const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [
				{
					name: "test",
					description:
						"Some quick example text to build on the card title and make up the bulk of the cardscontent."
				},
				{
					name: "test",
					description:
						"Some quick example text to build on the card title and make up the bulk of the cardscontent."
				},
				{
					name: "test",
					description:
						"Some quick example text to build on the card title and make up the bulk of the cardscontent."
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => {
						console.log("Planets", data),
							setStore({
								planets: data.results
							});
					});
				/**
                    fetch().then().then(data => setStore({ “foo”: data.bar }))
                */
			},
			getPeople: () => {
				// step 1
				fetch("https://swapi.dev/api/people/") //get this from the api
					.then(res => res.json())
					.then(data => {
						console.log("******", data),
							setStore({
								people: data.results
							});
					}); // change foo for people
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
