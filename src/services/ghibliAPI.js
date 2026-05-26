const ghibliAPI = {};

const baseUrl = "https://ghibli-api.vercel.app/api";

ghibliAPI.getAll = async (category) => {
	try {
		const resp = await fetch(`${baseUrl}/${category}`);

		if (!resp.ok) {
			throw new Error(`Error fetching ${category}`);
		}

		const data = await resp.json();

		if (Array.isArray(data)) {
			return data;
		}

		if (Array.isArray(data.data)) {
			return data.data;
		}

		if (Array.isArray(data.results)) {
			return data.results;
		}

		return [];
	} catch (error) {
		console.log(error);
		return [];
	}
};

ghibliAPI.getOne = async (category, id) => {
	try {
		const resp = await fetch(`${baseUrl}/${category}/${id}`);

		if (!resp.ok) {
			throw new Error(`Error fetching ${category} with id ${id}`);
		}

		const data = await resp.json();

		if (data.data) {
			return data.data;
		}

		return data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export default ghibliAPI;