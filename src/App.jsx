import BtnSearch from './components/BtnSearch';
import TableList from './components/TableList';
import { useState } from 'react';
const App = () => {
	const [crypto, setCrypto] = useState('');
	return (
		<>
			<div className='App'>
				<h1>CryptoApp</h1>
			</div>
			<BtnSearch setCrypto={setCrypto} />
			<TableList crypto={crypto} />
		</>
	);
};

export default App;
