import { useState } from 'react'
import PropTypes from 'prop-types';

const Login = ({ setToken }) => {
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();
	
	const loginUser = async (credentials) => {
		const res = await fetch(
			process.env.REACT_APP_API_ROUTE_LOGIN, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(credentials)
		})
		
		const data = await res.json();
		return data;
	}
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = await loginUser({
			username,
			password
		});
		setToken(token);
	}
		
	return (
	<div className="Login">
		<h1>Welcome</h1>
		<form onSubmit={handleSubmit}>
			<label>
				Username:
				<input type="text" name="username" onChange={e => setUserName(e.target.value)} />
			</label>
			<label>
				Password:
				<input type="text" name="password" onChange={e => setPassword(e.target.value)} />
			</label>
			<input type="submit" value="Submit" />
		</form>
    </div>
	)
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login