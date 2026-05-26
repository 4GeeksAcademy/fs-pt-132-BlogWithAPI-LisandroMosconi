import Card from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  	const films = Array.isArray(store.films) ? store.films : [];
	const people = Array.isArray(store.people) ? store.people : [];
	const locations = Array.isArray(store.locations) ? store.locations : [];

	return (
		<div className="container mt-5">
			<h1 className="mb-4">Ghibli Blog</h1>

			<h2 className="text-danger">Films</h2>
			<div className="d-flex overflow-auto mb-5">
				{films.map((film) => (
					<Card key={film.id} item={film} category="films" />
				))}
			</div>

			<h2 className="text-danger">People</h2>
			<div className="d-flex overflow-auto mb-5">
				{people.map((person) => (
					<Card key={person.id} item={person} category="people" />
				))}
			</div>

			<h2 className="text-danger">Locations</h2>
			<div className="d-flex overflow-auto mb-5">
				{locations.map((location) => (
					<Card key={location.id} item={location} category="locations" />
				))}
			</div>
		</div>
	);
}; 