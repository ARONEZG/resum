import React from "react";
import { Routes, Route } from "react-router-dom";
import s from "./Chat.module.css";


const Chat = (props) => {

    return <div className={s.messages}>
        <Routes className={s.active}>
            {props.messages}
        </Routes>
        <div className={s.form}>
            <textarea ref={props.referenceByTextArea}
                value={props.textValue}
                onChange={props.messageChange} />
            <button onClick={props.addMessage} >Send Message</button>
        </div>
    </div>;
}


export default Chat;