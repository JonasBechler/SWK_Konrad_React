import React from 'react'

import config from "../../../config.json"

import './App.css'
import Main from './SWK_React_Template/src/components/Main/Main';

function App() {
	
	return (

		<Main config={config}></Main>

	);
}

export default App;
