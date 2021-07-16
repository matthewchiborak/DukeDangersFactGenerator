//const InputForm = (props) => {
//<h2>{props.title}</h2> 
import { useState } from 'react'

import PropTypes from 'prop-types'
import Button from './button'

const InputForm = ({ title, onCreate }) => {
	const [creature, setCreature] = useState();
	
	const creatureChange = (e) => {
		setCreature(e.target.value);
	}
	
	return (
		<div>
			<h2>{title}</h2>
			Creature Name: <input type="text" onChange={(e) => creatureChange(e)}></input>
			<Button onClick={() => onCreate(creature)} color='red' backgroundColor='black' text="Generate" />
		</div>
	)
}

InputForm.defaultProps = {
	title: 'Input'
}

InputForm.propTypes = {
	title: PropTypes.string.isRequired,
	onCreate: PropTypes.func.isRequired
}

export default InputForm