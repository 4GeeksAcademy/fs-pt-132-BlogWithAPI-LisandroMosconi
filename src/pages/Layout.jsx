import { Outlet } from "react-router-dom"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { useEffect } from "react"
import ghibliAPI from "../services/ghibliAPI"
import useGlobalReducer from "../hooks/useGlobalReducer"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {

    	const { dispatch } = useGlobalReducer();

	useEffect(() => {
		const loadData = async () => {
			const films = await ghibliAPI.getAll("films");
			const people = await ghibliAPI.getAll("people");
			const locations = await ghibliAPI.getAll("locations");

			dispatch({ type: "load_films", payload: films });
			dispatch({ type: "load_people", payload: people });
			dispatch({ type: "load_locations", payload: locations });
		};

		loadData();
	}, []);

    return (
        <ScrollToTop>
            <Navbar />
                <Outlet />
            <Footer />
        </ScrollToTop>
    )
}