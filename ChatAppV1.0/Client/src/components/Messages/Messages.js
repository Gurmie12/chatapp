import React from 'react';
import './Messages.css';
import ScroolToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';

function Messages({messages, name}){

    return(
        <ScroolToBottom>
            {messages.map((message, index) =>{
                return(
                    <div key={index}>
                        <Message message={message} name={name}/>
                    </div>
                )
            })}
        </ScroolToBottom>
    )
}

export default Messages;