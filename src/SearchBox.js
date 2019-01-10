import React from 'react';

const SearchBox=({searchfield,searchChange})=>{
	return (
	<div className="pa2 tc">
		<input className="pa3 ba b--green lg-lightest-blue" placeholder="Enter the name" type="SearchBox" onChange={searchChange}/>
	</div>
	);
}

export default SearchBox;