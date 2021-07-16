import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import InputForm from './components/input-form';
import Display from './components/display'
import Home from './components/home';
import FactPage from './components/fact-page';

function App() {

	const [facts, setFacts] = useState([])
	
	//useEffect is for doing something when page loads. Thats not needed here but in case you want to change it
		
	const createFact = async (name) => {
		const res = await fetch(
		'http://localhost:3000/fact', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: '{"name": "' + name + '"}'
		}
		);
		
		const data = await res.json();
		setFacts([...facts, data]);
	}
	
	const clearFacts = () => {
		setFacts([]); 
	}
	
  return (
	<Router>
		<div className="App">
			<Route path='/login' exact component={Home} />
			<Route path='/' exact component={FactPage} />
		</div>
	</Router>
  );
}

export default App;
