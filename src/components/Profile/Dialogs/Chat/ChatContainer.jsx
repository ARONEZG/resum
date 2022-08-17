import React from "react";
import { Routes, Route } from "react-router-dom";
import Message from "./Message/Message";
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../../../redux/state";
import Chat from "./Chat";


const ChatContainer = (props) => {

    const newMessageElement = React.createRef();

    const messagesElements = props.store.getState().messagesPage.messages.map(
        dialog =>
            <Route
            path={"/" + dialog.id}
            element={<Message id={dialog.id}
            message={dialog.messages} />}
            />);

    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        const action = updateNewMessageActionCreator(text);
        props.store.dispatch(action);
    }

    const textInPost = () => {
        const idArray = props.store.getState().messagesPage.messages.map(el => el.id);
        props.store.dispatch(addNewMessageActionCreator(idArray[1]));
    }


    return <Chat messages={messagesElements}
    referenceByTextArea={newMessageElement}
    messageChange={onMessageChange}
    addMessage={textInPost}
    textValue={props.store.getState().messagesPage.newTextMessage}/>
}


export default ChatContainer;