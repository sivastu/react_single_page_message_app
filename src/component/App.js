import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard';
import {ContactsProvider} from '../context/ContactContext';

function App(){
	
	const[id,setId] = useLocalStorage('id');
	
	const dashboard=(
	<ContactsProvider>
	<Dashboard id={id} />
	</ContactsProvider>
	)
	
	return(
	id ? dashboard : <Login onIdSubmit={setId}/>
	
	)
}

export default App;