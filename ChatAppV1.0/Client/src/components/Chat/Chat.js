import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import MessageInput from '../MessageInput/MessageInput';
import Messages from '../Messages/Messages';

let socket;

function Chat({location}){

    const[name, setName] = useState('');
    const[age, setAge] = useState(0);
    const[room, setRoom] = useState('');
    const[school, setSchool] = useState('');
    const[messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const ENDPOINT = 'localhost:5000';

    useEffect(() =>{
        const {name, age, room, school} = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setRoom(room);
        setAge(age);
        setName(name);
        setSchool(school);

        socket.emit('new user', {name, age, room, school}, () =>{
            return null;
        });

        return () =>{
            socket.emit('disconnect');

            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() =>{
        socket.on('message', (message) =>{
            setMessages([...messages, message]);
        })
    },[messages])

    const sendMessage = (e) =>{
        e.preventDefault();

        if(message){
            socket.emit('send message', message, () =>{
                setMessage('');
            })
        }
    }


    return(
        <div>
            <div>
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <MessageInput message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}


export default Chat;