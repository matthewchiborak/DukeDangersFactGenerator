import { useState } from 'react'
import { Link } from 'react-router-dom'

import InputForm from './input-form';
import Display from './display'

const FactPage = () => {
	
	const [facts, setFacts] = useState([])
		
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
	<div className="FactPage">
		<h1>Duke Danger's Fact Generator</h1>
		<InputForm title="Select Your Creature" onCreate={createFact}/>
		<Display facts={facts} onClear={clearFacts} />
		<Link to='/login'>Logout</Link>
    </div>
	)
}

export default FactPage
