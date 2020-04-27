import React from 'react';
import './InfoBar.css';
import logo from '../Files/Logo.svg'

function InfoBar({room}){

    return(
        <div className="infobar-container">
            <div className="innerContainerLeft">
                <img className="logo-icon" src = {logo} alt="Image"/>
                <h3>{room}</h3>
            </div>
            <div className = "innerContainerRight">
                <a href="/"><img alt="close"></img></a>
            </div>
        </div>
    )
}

export default InfoBar;