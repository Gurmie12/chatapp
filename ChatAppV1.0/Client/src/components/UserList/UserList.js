import React from 'react';
import {ListGroup} from 'react-bootstrap';


function UserList( {room, users} ){

    const random = users[0];
    console.log(typeof random)
    return(
        <div className="userlist-container">
            <div className="heading">
                <h3>Users in room {room}</h3>
            </div>
            <div className="list">
                <ListGroup>
                    {
                        users.map((user, i) =>{
                            return(
                                <div className="user">
                                    <ListGroup.Item key={i}>{user.name}</ListGroup.Item>
                                </div>
                            )
                        })
                    }
                </ListGroup>
            </div>
        </div>
    )
}

export default UserList;