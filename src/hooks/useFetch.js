import { useState, useEffect } from 'react';
import getCryptoList from '../data/getCryotoApi';

const useFetch = () => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getCryptoList().then((crypto) =>
			setState({
				data: crypto,
				loading: false,
			})
		);
	}, ['']);

	return state;
};

export default useFetch;
