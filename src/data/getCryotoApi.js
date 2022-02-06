const getCryptoTableData = async () => {
	const urlApi =
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=12h';

	const resp = await fetch(urlApi);
	return ({ name, image, current_price, last_updated } = await resp.json());
};
