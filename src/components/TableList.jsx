import useFetch from '../hooks/useFetch';
import { useState } from 'react';

const TableList = ({ crypto }) => {
	const { data: list, loading } = useFetch();
	return (
		<>
			{loading && <p>cargando...</p>}
			<table>
				<thead>
					<tr>
						<th># Rank</th>
						<th className='logo'>icon</th>
						<th>Name</th>
						<th>Symbol</th>
						<th>Price</th>
						<th>LastUpdate</th>
						<th>Volumen</th>
					</tr>
				</thead>
				<tbody>
					{list
						.filter(({ name }) => {
							return name.toLowerCase().includes(crypto.toLowerCase());
						})
						.map(({ id, rank, name, icon, price, symbol, lastUpdate, volume }) => (
							<tr key={id} id={id} className='prioirty'>
								<td className='smallTd'>{rank}</td>
								<td className='logo'>
									<img src={icon} alt='logo' width='40px' height='40px' />
								</td>
								<td className='nameList'>
									<p>{name}</p>
								</td>
								<td className='smallTd'>{symbol}</td>
								<td className='smallTd'>${price.toFixed(2)}</td>
								<td className='update'>{lastUpdate}</td>
								<td>{volume}</td>
							</tr>
						))}
				</tbody>
			</table>
		</>
	);
};

export default TableList;
