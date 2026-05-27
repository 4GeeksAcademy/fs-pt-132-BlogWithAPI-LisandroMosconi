import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import Card from "../components/Card";

export const Category = () => {

	const { category } = useParams();

	const { store } = useGlobalReducer();

	const items = Array.isArray(store[category]) ? store[category] : [];

	const getCategoryTitle = () => {
		if (category === "films") return "Films";
		if (category === "people") return "People";
		if (category === "locations") return "Locations";
		return "Unknown category";
	};

	return (
		<div className="container mt-5">
			<div className="d-flex justify-content-between align-items-center mb-4">
				<h1>{getCategoryTitle()}</h1>

				<Link to="/" className="btn btn-outline-primary">
					Back home
				</Link>
			</div>

			{items.length === 0 ? (
				<p className="text-muted">No items found in this category.</p>
			) : (
				<div className="row">
					{items.map((item) => (
						<div className="col-md-4 mb-4" key={item.id}>
							<Card item={item} category={category} />
						</div>
					))}
				</div>
			)}
		</div>
	);
};