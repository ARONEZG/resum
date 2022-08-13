import React from "react";
import s from './Dialogs.module.css';
import NameOfUsers from "./NameOfUsers/NameOfUsers";
import Chat from "./Chat/Chat";

const Dialogs = (props) => {

    return <div className={s.main}>

        <NameOfUsers messagesPage={props.messagesPage} dispatch={props.dispatch} />

        <Chat messages={props.messagesPage.messages}
              newTextMessage={props.messagesPage.newTextMessage}
              dialogs={props.messagesPage.dialogs}
              dispatch={props.dispatch} />

    </div>;
}


export default Dialogs;