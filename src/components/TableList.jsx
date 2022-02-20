import useFetch from '../hooks/useFetch';

const TableList = () => {
	const { data: list, loading } = useFetch();
	return (
		<>
			{loading && <p>cargando...</p>}
			<table>
				<thead>
					<tr>
						<th># Rank</th>
						<th>Name</th>
						<th>Symbol</th>
						<th>Price</th>
						<th>LastUpdate</th>
					</tr>
				</thead>
				<tbody>
					{list.map(({ id, rank, name, icon, price, symbol, lastUpdate }) => (
						<tr key={id} className='prioirty'>
							<td className='rank'>{rank}</td>
							<td className='logo'>
								<img src={icon} alt='logo' width='30px' />
								<p>{name}</p>
							</td>
							<td className='symbol'>{symbol}</td>
							<td>${price.toFixed(2)}</td>
							<td>{lastUpdate}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default TableList;
