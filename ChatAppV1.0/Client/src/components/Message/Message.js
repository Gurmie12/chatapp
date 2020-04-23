import React from 'react';
import './Message.css';

function Message({message: {user, text}, name}){

    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return(
        isSentByCurrentUser
        ? (
            <div>
                <p style={{color:'red'}}>{trimmedName}</p>
                <div>
                    <p>{text}</p>
                </div>
            </div>
        )
        : (
            <div>
                <p style={{color:'blue'}}>{trimmedName}</p>
                <div>
                    <p>{text}</p>
                </div>
            </div>
        )
    )
}

export default Message;