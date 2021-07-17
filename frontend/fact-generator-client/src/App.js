import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import InputForm from './components/input-form';
import Button from './components/button';
import Display from './components/display'
import Login from './components/login';
import FactPage from './components/fact-page';
import useToken from './useToken';


function App() {

	//const [token, setToken] = useState();
	const { token, setToken } = useToken(); 
	
	const logout = () => {
		setToken("");
	}
	
	const printToken = () => {
		console.log(token);
	}
		
	if(!token) {
		return (
		<div className="App">
			<Login setToken={setToken} />
		</div>
		);
	}
	
	//If got to here then token has been set
  return (
  <div className="App">
	<Button onClick={() => logout()} color='red' backgroundColor='black' text="Logout" /> 
	<Button onClick={() => printToken()} color='red' backgroundColor='black' text="Token" /> 
	<Router>
		<Switch>
			<Route path='/' exact component={FactPage} />
		</Switch>
	</Router>
	</div>
  );
}

export default App;
