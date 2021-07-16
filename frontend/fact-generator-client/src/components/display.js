import Button from './button'

const Display = ({ facts, onClear }) => {		
	return (
		<div>
		{facts.map((fact) => (
			<h3 key={fact.id}>{fact.text}</h3>
		))}
		
		{ 
		facts.length > 0
		 ? <Button onClick={() => onClear()} color='red' backgroundColor='black' text="Clear" /> 
		 : ''
		 }
		</div>
	)
}

export default Display
