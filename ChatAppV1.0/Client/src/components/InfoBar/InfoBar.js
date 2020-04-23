import React from 'react';
import './InfoBar.css';

function InfoBar({room}){

    return(
        <div className="infobar">
            <div className="innerContainerLeft">
                <img className="onlineIcon" alt="Image"/>
                <h3>{room}</h3>
            </div>
            <div className = "innerContainerRight">
                <a href="/"><img alt="close"></img></a>
            </div>
        </div>
    )
}

export default InfoBar;