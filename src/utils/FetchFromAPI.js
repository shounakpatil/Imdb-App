import axios from "axios";
const BASE_URL='https://imdb-top-100-movies.p.rapidapi.com';
const options = {
	hostname: BASE_URL,
	port: null,
	path: '/',
	headers: {
		'x-rapidapi-key': 'a9bb170720msh243fc36e81971c1p18d269jsn00111acc5e7b',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};
export const FetchFromAPI = async (url) => {
	try {
	  const fullUrl = `${BASE_URL}/${url}`;
	  console.log("Request URL:", fullUrl);
	  console.log("Request Headers:", options.headers);
	  const { data } = await axios.get(fullUrl, options);
	//   console.log(data);
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
  