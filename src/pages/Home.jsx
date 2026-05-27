import Card from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const films = Array.isArray(store.films) ? store.films : [];
	const people = Array.isArray(store.people) ? store.people : [];
	const locations = Array.isArray(store.locations) ? store.locations : [];

	return (
		<div className="container mt-5">
			<div className="ghibli-hero mb-5">
				<p className="ghibli-kicker mb-2">Read later collection</p>
				<h1 className="display-5 mb-3">Ghibli Archive</h1>
				<p className="lead mb-0">
					A small cozy archive of films, characters and locations from Studio Ghibli.
				</p>
			</div>

			<div className="d-flex justify-content-between align-items-center">
				<h2 className="text-danger">Films</h2>
				<Link to="/category/films">View all</Link>
			</div>
			<div className="d-flex overflow-auto mb-5">
				{films.slice(0, 6).map((film) => (
					<Card key={film.id} item={film} category="films" />
				))}
			</div>

			<div className="d-flex justify-content-between align-items-center">
				<h2 className="text-danger">People</h2>
				<Link to="/category/people">View all</Link>
			</div>
			<div className="d-flex overflow-auto mb-5">
				{people.slice(0, 6).map((person) => (
					<Card key={person.id} item={person} category="people" />
				))}
			</div>

			<div className="d-flex justify-content-between align-items-center">
				<h2 className="text-danger">Locations</h2>
				<Link to="/category/locations">View all</Link>
			</div>
			<div className="d-flex overflow-auto mb-5">
				{locations.slice(0, 6).map((location) => (
					<Card key={location.id} item={location} category="locations" />
				))}
			</div>
		</div>
	);
}; 