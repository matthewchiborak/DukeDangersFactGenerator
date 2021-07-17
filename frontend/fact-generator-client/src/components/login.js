import { useState } from 'react'
import PropTypes from 'prop-types';

const Login = ({ setToken }) => {
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();
	
	const loginUser = async (credentials) => {
		
		var formBody = [];
		var encodedKey = encodeURIComponent("username");
		var encodedValue = encodeURIComponent(username);
		formBody.push(encodedKey + "=" + encodedValue);
		var encodedKey2 = encodeURIComponent("password");
		var encodedValue2 = encodeURIComponent(password);
		formBody.push(encodedKey2 + "=" + encodedValue2);
		
		formBody = formBody.join("&");
		
		const res = await fetch(
			process.env.REACT_APP_API_ROUTE_LOGIN, {
			method: 'POST',
			headers: {
				//'Content-type': 'application/json'
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: formBody
			//body: JSON.stringify(credentials)
			//body: { "username": username, "password": password }
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