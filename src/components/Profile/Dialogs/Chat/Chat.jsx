import React from "react";
import { Routes, Route } from "react-router-dom";
import s from "./Chat.module.css";
import Message from "./Message/Message";



const Chat = (props) => {
    const messagesElements = props.messages.map(
        dialog =>
            <Route path={"/" + dialog.id} element={<Message id={dialog.id} message={dialog.messages} />}
            />);

    return <div className={s.messages}>
        <Routes className={s.active}>
           {messagesElements}
        </Routes>
        <div className={s.form}>
            <textarea />
            <button>Send Message</button>
        </div>
    </div>;
}


export default Chat;