import PropTypes from 'prop-types'

const Button = ({ text, color, backgroundColor, onClick }) => {	
	return (
			<button onClick={onClick} style={{ backgroundColor: backgroundColor, color: color }}>{text}</button>
	)
}

Button.defaultProps = {
	text: 'OK',
	color: 'black',
	backgroundColor: 'white'
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string,
	backgroundColor: PropTypes.string,
	onClick: PropTypes.func.isRequired
}

export default Button