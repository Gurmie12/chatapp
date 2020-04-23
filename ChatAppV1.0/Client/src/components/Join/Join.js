import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './join.css'


function Join(){

    //Declare hooks for the join component
    const[name, setName] = useState('');
    const[age, setAge] = useState(0);
    const[room, setRoom] = useState('');
    const[school, setSchool] = useState('');


    return(
        <div className="join-body">
            <div className="join-card">
                <h1 className="join-header">Start Chatting!</h1>
                <div>
                    <input placeholder="Please Enter Your Chat Name" className="join-input" type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <input placeholder="Please Enter Your School Name" className="join-input mt-20" type="text" onChange={(e) => setSchool(e.target.value)} />
                </div>
                <div>
                    <input placeholder="Please Enter Your Age" className="join-input mt-20" type="number" onChange={(e) => setAge(e.target.value)} />
                </div>
                <div>
                    <input placeholder="Please Enter a Room Name" className="join-input mt-20" type="text" onChange={(e) => setRoom(e.target.value)} />
                </div>
                <Link onClick={(e) => (name === '' || room === '' || school === '' || age === 0) ? e.preventDefault : null}  to={`/Chat?name=${name}&room=${room}&age=${age}&school=${school}`}>
                    <button className="join-button mt-20" type="submit">Enter Chat!</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;