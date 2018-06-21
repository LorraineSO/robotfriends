import React from 'react';
import CardList from './cardList.js';
import  { robots } from './robots.js';

const App = () => {
	return (
			<CardList robots={robots}/>
		)
}

export default App;