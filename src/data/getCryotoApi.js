const getCryptoList = async () => {
	const urlApi =
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=12h';

	const resp = await fetch(urlApi);
	const coins = await resp.json();
	const list = coins.map((data) => ({
		id: data.id,
		rank: data.market_cap_rank,
		name: data.name,
		icon: data.image,
		price: data.current_price,
		symbol: data.symbol,
		lastUpdate: data.last_updated,
		volume: data.total_volume,
	}));
	return list;
};

export default getCryptoList;
