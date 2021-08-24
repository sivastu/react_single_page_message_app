import React,{useState} from 'react';
import {Tab,Nav,Button,Modal} from 'react-bootstrap';
import Conversation from './Conversation';
import Contacts from './Contacts';
import NewConversationModel from './NewConversationModel';
import NewContactModel from './NewContactModel';


const CONVERSATION_KEY = 'conversation';
const CONTACTS_KEY = 'contacts';

export default function Sidebar({id}){
	const [activeKey,setactiveKey] = useState(CONVERSATION_KEY) 
	const conversationOpen = activeKey === CONVERSATION_KEY;
	const [modelOpen, setmodelOpen] = useState(false);
	
	function closeModel(){
		setmodelOpen(false);
	}
	
	return(
	<div style={{width:'250px' }} className="d-flex flex-column">
		<Tab.Container activeKey={activeKey} onSelect={setactiveKey}>
			<Nav variant="tabs" className="justify-content-center">
				<Nav.Item>
					<Nav.Link eventKey={CONVERSATION_KEY}>conversation</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey={CONTACTS_KEY}>contacts</Nav.Link>
				</Nav.Item>
			</Nav>
			<Tab.Content className="border-right overflow-auto flex-grow-1">
				<Tab.Pane eventKey={CONVERSATION_KEY}>
				<Conversation />
				</Tab.Pane>
				<Tab.Pane eventKey={CONTACTS_KEY}>
				<Contacts />
				</Tab.Pane>
			</Tab.Content>
			<div className="p-2 border-top border-right small">
			Your Id : <span className="text-muted">{id}</span>
			</div>
			<Button onClick={()=>setmodelOpen(true)}>
			New {conversationOpen ? 'Conversation' : 'Contacts'}
			</Button>
		</Tab.Container>
		<Modal show={modelOpen} onHide={closeModel}>
		{conversationOpen ? <NewConversationModel closeModel={closeModel} /> : <NewContactModel closeModel={closeModel} />}
		</Modal>
	</div>	
	)
}