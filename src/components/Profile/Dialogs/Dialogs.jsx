import React from "react";
import s from './Dialogs.module.css';
import NameOfUsers from "./NameOfUsers/NameOfUsers";
import Chat from "./Chat/Chat";

const Dialogs = (props) => {

    return <div className={s.main}>

        <NameOfUsers dialogs={props.messagesPage.dialogs} dispatch={props.dispatch} />

        <Chat messages={props.messagesPage.messages}
              newTextMessage={props.messagesPage.newTextMessage}
              dispatch={props.dispatch} />

    </div>;
}


export default Dialogs;