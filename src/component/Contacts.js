import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {useContacts} from '../context/ContactContext';

export default function Contacts(){
	const {contacts} = useContacts();
	
	return(
	<ListGroup>
	Contacts
	</ListGroup>
	)
}