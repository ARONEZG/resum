import React from "react";
import { Routes, Route } from "react-router-dom";
import s from "./Chat.module.css";
import Message from "./Message/Message";
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../../../redux/state";


const Chat = (props) => {

    const newMessageElement = React.createRef();

    const messagesElements = props.messages.map(
        dialog =>
            <Route
            path={"/" + dialog.id}
            element={<Message id={dialog.id}
            message={dialog.messages} />}
            />);

    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        const action = updateNewMessageActionCreator(text);
        props.dispatch(action);
    }

    const textInPost = () => {
        const idArray = props.messages.map(el => el.id);
        props.dispatch(addNewMessageActionCreator(idArray[1]));
    }


    return <div className={s.messages}>
        <Routes className={s.active}>
            {messagesElements}
        </Routes>
        <div className={s.form}>
            <textarea ref={newMessageElement}
                value={props.newTextMessage}
                onChange={onMessageChange} />
            <button onClick={textInPost} >Send Message</button>
        </div>
    </div>;
}


export default Chat;