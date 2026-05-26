import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/" className="navbar-brand mb-0 h1 text-decoration-none">
					Ghibli Blog
				</Link>

				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Favorites {store.favorites.length}
					</button>

					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.length === 0 ? (
							<li>
								<span className="dropdown-item text-muted">
									No favorites yet
								</span>
							</li>
						) : (
							store.favorites.map((favorite) => (
								<li key={favorite.id} className="d-flex align-items-center justify-content-between px-2">
									<Link
										className="dropdown-item"
										to={`/details/${favorite.category}/${favorite.id}`}
									>
										{favorite.name}
									</Link>

									<button
										className="btn btn-sm btn-outline-danger"
										onClick={() =>
											dispatch({
												type: "remove_favorite",
												payload: favorite.id
											})
										}
									>
										x
									</button>
								</li>
							))
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};