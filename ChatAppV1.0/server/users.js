const users = [];

const addUser = ({id, name, age, room, school}) =>{
    name = name.trim().toLowerCase();
    school = school.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const duplicate = users.find((user) => user.room === room && user.name === name && user.school === school);

    if(duplicate){
        return {error: "A user with this account already exists"};
    }

    const user = {id, name, school, age, room};
    users.push(user);
    return user;
}

const removeUser = (id) =>{
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1){
        return users.splice(index, 1)[0];

    }
}

const getUser = (id) =>{
    return users.find((user) => user.id === id);
}

const getUsersInRoom = (room) =>{
    return users.filter((user) => user.room === room);
}


module.exports = {addUser, removeUser, getUser, getUsersInRoom};