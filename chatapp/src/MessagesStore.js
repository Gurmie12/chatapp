import React from 'react';
import io from 'socket.io-client'

export const CTX = React.createContext();


//Test state
const initState = {
    general: [
        {from: 'aweqeqw', msg: 'wadawdwa'},
        {from: 'bcsfsefe', msg: 'awdwaddsgfgesg'},
        {from: 'vbdrgrgd', msg: 'bjhawfhibiefbiab'},

    ],
    topic1: [
        {from: 'dawdawgv', msg: 'wandfiebfguyhebuf'},
        {from: 'edawwqf', msg: 'iwbefuiwebfuiybiujse'},
        {from: 'fdawddaw', msg: 'iwqefbyuiwebfuiywebfuih'},
    ],

    topic3: [
        {from: 'gvvadwad', msg: 'jabwefibeiwjfbiWHBFEHIBF'},
        {from: 'hhyyjhy', msg: 'KehwbfuWEBFUIYHEBFUHwbf'},
        {from: 'iqqqqq', msg: 'febfhbsuhbefhbfsh'},
    ],

}
function reducer(state, action){
    const {from, msg, topic} = action.payload;
    switch(action.type){
        case 'RECEIVE_MESSAGE' : 
            return{
                ...state,
                 [topic]: [
                     ...state[topic], 
                     {from, msg} 
                ]
            }
        default:
            return state
    }
}


let socket;

function sendChatAction(value){
    socket.emit('chat message', value);
}


function MessagesStore(props){

    const [allChats, dispatch] = React.useReducer(reducer, initState);

    if(!socket){
        socket = io(":3001");
        socket.on('chat message', function(msg){
            dispatch({type: 'RECEIVE_MESSAGE', payload:msg});
        });
    }

    const user = "Gurman" + Math.random(100);

    return(
        <CTX.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </CTX.Provider>
    )
}

export default MessagesStore;