import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';


import {CTX} from './MessagesStore';



const styles = makeStyles((theme) =>({
    root: {
        '& > *': {
        margin: '50px',
        padding: theme.spacing(3,2),
        },
    },

    flex : {
        display: 'flex',
    },

    chatRooms : {
        width: '30%',
        height: '500px',
        borderRight: '1px solid black'
    },

    messageBox : {
        width: '85%',
        height: '90px',
        borderTop: '1px solid black',
        paddingTop: '10px',

    },

    chatWindow: {
        width: '70%%',
        height: '500px',
    },

    sendButton: {
        width: '15%',
        height: '90px',
    },

    inline: {
        display: 'inline',
      },

    input: {
        display: 'none',
    },

    button: {
        paddingTop: '25px',
    }
}));

function Dashboard(){

    //CTX store states
    const {allChats, sendChatAction, user} = React.useContext(CTX);
    const chatRooms = Object.keys(allChats);

    //Local States
    const classes = styles();
    const[messageText, setMessageText] = useState("");
    const [activeRoom, setActiveRoom] = useState(chatRooms[0]);


    return(
        <div>
            <div className = {classes.root}>
                <Paper elevation={3}>
                    <Typography variant="h3" component="h3">
                        Chat App Title
                    </Typography>
                    <Typography component="h6" variant ="h6">
                        {activeRoom}
                    </Typography>
                    <div className={classes.flex}>
                        <div className={classes.chatRooms}>
                            <List>
                                {chatRooms.map((topic) =>{
                                    return(
                                        <ListItem alignItems="flex-start" button key={topic} onClick={(e) => setActiveRoom(e.target.innerText)}>
                                            <ListItemAvatar>
                                                <Avatar />
                                            </ListItemAvatar>
                                            <ListItemText
                                            primary={topic}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        className={classes.inline}
                                                        color="textPrimary"
                                                    >
                                                        {topic.description}
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                            />
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </div>
                        <div className={classes.chatWindow}>
                            {
                                allChats[activeRoom].map((message, index) =>{
                                    return(
                                        <div className={classes.flex} key={index}style = {{paddingLeft: '5px'}}>
                                            <Chip
                                                avatar={<Avatar>{message.from[0]}</Avatar>}
                                                label={message.from}
                                                color="primary"
                                            />
                                            <Typography variant='p' component='p' style = {{paddingLeft: '5px'}}>{message.msg}</Typography>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={classes.flex}>
                        <div className={classes.messageBox}>
                            <TextField
                                id="outlined-full-width"
                                label="Type Message Here!"
                                placeholder="Introduce Yourself."
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                value={messageText}
                                onChange={(e) => setMessageText(e.target.value)}
                            />
                        </div>
                        <div className={classes.sendButton}>
                            <div className={classes.button}>
                                <Button variant="contained" color="primary"
                                 onClick={() => {
                                     sendChatAction({msg: messageText, from: user, topic: activeRoom});
                                     setMessageText('');
                                 }}
                                 >
                                    Send Message
                                </Button>
                            </div>
                        </div>
                    </div>
                </Paper>
            </div>
        </div>
    )
}

export default Dashboard;