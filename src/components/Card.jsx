import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Card = ({ item, category }) => {
    const { store, dispatch } = useGlobalReducer();

    const isFavorite = store.favorites.some(
        (favorite) => favorite.id === item.id
    );

    const getTitle = () => {
        if (category === "films") return item.title;
        if (category === "people") return item.name;
        if (category === "locations") return item.name;
        return "Unknown";
    };

    const getDescription = () => {
        if (category === "films") return item.description;
        if (category === "people") return `Gender: ${item.gender || "Unknown"}`;
        if (category === "locations") return `Climate: ${item.climate || "Unknown"}`;
        return "";
    };

    const getImage = () => {

        if (item.image) return item.image;
        if (item.movie_banner) return item.movie_banner;

        if (item.films && item.films.length > 0) {
            const relatedFilm = store.films.find((film) =>
                item.films.includes(film.url)
            );

            if (relatedFilm?.image) return relatedFilm.image;
            if (relatedFilm?.movie_banner) return relatedFilm.movie_banner;
        }

        return "https://placehold.co/400x200?text=Ghibli";
    };

    const handleFavorite = () => {
        if (isFavorite) {
            dispatch({ type: "remove_favorite", payload: item.id });
            return;
        }

        dispatch({
            type: "add_favorite",
            payload: {
                id: item.id,
                name: getTitle(),
                category: category
            }
        });
    };

    return (
        <div className="card me-3 mb-4" style={{ minWidth: "18rem", maxWidth: "18rem" }}>
			<img
				src={getImage()}
				className="card-img-top"
				alt={getTitle()}
				style={{ height: "180px", objectFit: "cover" }}
			/>

            <div className="card-body">
                <h5 className="card-title">{getTitle()}</h5>

                <p className="card-text">
                    {getDescription()?.slice(0, 90)}...
                </p>

                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/details/${category}/${item.id}`} className="btn btn-outline-primary">
                        Learn more
                    </Link>

                    <button
                        className={isFavorite ? "btn btn-warning" : "btn btn-outline-warning"}
                        onClick={handleFavorite}
                    >
                        <i className="fa fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;