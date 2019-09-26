import React from 'react';
// import './App.css';
import Tiemr from './timer'
import Clock from './tick.js'
import Toggle from './Toggle'
import NumberList from './components/map'

const numbers = [1, 2, 3, 4, 5];

function App() {
	return (
		<div className="App">
			<Tiemr/>
			<Clock/>
			<Toggle/>
			<NumberList numbers={numbers}/>
		</div>
	);
}

export default App;
