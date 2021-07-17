import { useState } from 'react'
import { Link } from 'react-router-dom'

import InputForm from './input-form';
import Display from './display';

const FactPage = ( { authToken } ) => {
	
	const [facts, setFacts] = useState([])
	
	const createFact = async (name) => {	
		const res = await fetch(
		process.env.REACT_APP_API_ROUTE_FACT, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				'Authorization': authToken
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
		<div className="FactPage">
			<h1>Duke Danger's Fact Generator</h1>
			<InputForm title="Select Your Creature" onCreate={createFact}/>
			<Display facts={facts} onClear={clearFacts} />
		</div>
	)
}

export default FactPage
