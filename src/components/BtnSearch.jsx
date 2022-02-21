const BtnSearch = ({ setCrypto }) => {
	const handleInputChange = (e) => {
		setCrypto(e.target.value);
	};
	return (
		<input
			type='text'
			placeholder='Search...'
			onChange={handleInputChange}
			className='field'
		/>
	);
};

export default BtnSearch;
