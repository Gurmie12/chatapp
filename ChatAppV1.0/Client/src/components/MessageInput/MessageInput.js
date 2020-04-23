import React from 'react';
import './MessageInput.css';

function MessageInput({message, setMessage, sendMessage}){

    return(
        <form>
            <input
                 value={message}
                onChange={(e) =>setMessage(e.target.value)}
                onKeyPress={(e) => (e.key === 'Enter') ? sendMessage(e) : null} />
            <button onClick={(e) =>sendMessage(e)}>Send!</button>
        </form>
    )
}

export default MessageInput;