import React from "react";
import s from "./Chat.module.css";
import Message from "./Message/Message";


const Chat = (props) => {
    const messagesElements = props.messages.map(
        dialog =>
            <Message id={dialog.id} message={dialog.messages}/>);

    return <div className={s.messages}>
        <div className={s.active}>
            {messagesElements}
        </div>
    </div>;
}


export default Chat;