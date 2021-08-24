import React,{useState} from 'react';
import {Tab,Nav} from 'react-bootstrap';
import Conversation from './Conversation';
import Sidebar from './Sidebar';


export default function Dashboard({id}){
	return(
	<div className="d-flex" style={{height:'100vh'}}>
	<Sidebar id={id} />
	</div>
	)
}