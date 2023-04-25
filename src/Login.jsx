import React from "react";
import icon from './BearHuddleIconV1.png';
import './Login.css';
import PopUp from './Popup';
import Typing from './Typing'

const LoginForm = () => {
    return (
       <div className="LoginForm"> 
        <div className="container">
            <img className="icon" src={icon} />
                <Typing />
                <PopUp />
          </div>
            <div className="bottomtext">
            <u>Terms of Service</u> | <u>Privacy Policy</u></div>
           </div>
    )
}

export default LoginForm