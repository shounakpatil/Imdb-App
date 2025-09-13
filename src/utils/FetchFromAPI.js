import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL || 'https://imdb-top-100-movies.p.rapidapi.com';
// sanitize env value (strip accidental quotes/semicolons and whitespace)
const API_KEY_RAW = import.meta.env.VITE_RAPIDAPI_KEY || '';
const API_KEY = API_KEY_RAW.toString().trim().replace(/^['"]|['"]$/g, '').replace(/;$/, '');

if (!API_KEY) console.warn('VITE_RAPIDAPI_KEY not set or empty — requests will fail.');

const config = {
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

export const FetchFromAPI = async (url) => {
	if (!API_KEY) throw new Error('Missing VITE_RAPIDAPI_KEY in .env. Add it and restart dev server.');
	try {
		const fullUrl = `${BASE_URL}/${url}`;
		console.log("Request URL:", fullUrl);
		console.log("Request Headers:", config.headers);
		const { data } = await axios.get(fullUrl, config);
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error('Axios error message:', error.message);
			console.error('Axios error code:', error.code);
			console.error('Axios error response:', error.response);
			console.error('Axios error request:', error.request);
		} else {
			console.error('Non-Axios error:', error);
		}
		throw error;
	}
};