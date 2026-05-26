export const initialStore = () => {
	return {
		films: [],
		people: [],
		locations: [],
		favorites: []
	};
};

export default function storeReducer(store, action = {}) {
	switch (action.type) {
		case "load_films":
			return {
				...store,
				films: action.payload
			};

		case "load_people":
			return {
				...store,
				people: action.payload
			};

		case "load_locations":
			return {
				...store,
				locations: action.payload
			};

		case "add_favorite": {
			const alreadyExists = store.favorites.some(
				(favorite) => favorite.id === action.payload.id
			);

			if (alreadyExists) {
				return store;
			}

			return {
				...store,
				favorites: [...store.favorites, action.payload]
			};
		}

		case "remove_favorite":
			return {
				...store,
				favorites: store.favorites.filter(
					(favorite) => favorite.id !== action.payload
				)
			};

		default:
			throw Error("Unknown action.");
	}
}