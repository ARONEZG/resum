import React from "react";
import { Routes, Route } from "react-router-dom";
import Message from "./Message/Message";
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../../../redux/state";
import Chat from "./Chat";
import {useDispatch, useSelector} from "react-redux";


const ChatContainer = (props) => {
    const dispatch = useDispatch();
    const messagesPage = useSelector(state => state.messagesPage);
    const newMessageElement = React.createRef();

    const messagesElements = messagesPage.messages.map(
        dialog =>
            <Route
            path={"/" + dialog.id}
            element={<Message id={dialog.id}
            message={dialog.messages} />}
            />);

    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        const action = updateNewMessageActionCreator(text);
        dispatch(action);
    }

    const textInPost = () => {
        const idArray = messagesPage.messages.map(el => el.id);
        dispatch(addNewMessageActionCreator(idArray[1]));
    }


    return <Chat messages={messagesElements}
    referenceByTextArea={newMessageElement}
    messageChange={onMessageChange}
    addMessage={textInPost}
    textValue={messagesPage.newTextMessage}/>
}


export default ChatContainer;