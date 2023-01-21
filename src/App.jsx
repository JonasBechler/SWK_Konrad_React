import React from 'react'


import './App.css'
import './SWK_React_Template/src/styles/App.css'

import Main from './SWK_React_Template/src/components/Main/Main';

function App() {
	const name = "Konrad";
	const icon = require("./Bicycle.png");

	const config = require( "../../config.json");

	config.port = config.konrad.port
	config.port_react = config.konrad.port_react

	return (

		<Main name={name} icon={icon} config={config}></Main>

	);
}

export default App;
