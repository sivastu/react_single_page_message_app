import React,{useRef} from 'react';
import {Container ,Form,Button } from 'react-bootstrap';
import {v4 as uuidV4} from 'uuid';

export default function Login({onIdSubmit}){
	
	const idRef = useRef();
	
	function handleSubmit(e){
		e.preventDefault()
		onIdSubmit(idRef.current.value);
	}
	
	function createNewId(){
		onIdSubmit(uuidV4())
	}
	
	return(
	<Container>
		<Form onSubmit={handleSubmit}>
			<Form.Group> 
				<Form.Label>Login Page</Form.Label>
				<Form.Control type="text" ref={idRef} required />
				<Button type="submit">Login</Button>
				<Button onClick={createNewId}>Create A Id</Button>
			</Form.Group>
		</Form>
	</Container>
	);
}