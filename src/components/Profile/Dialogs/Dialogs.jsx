import React from "react";
import s from './Dialogs.module.css';
import NameOfUsers from "./NameOfUsers/NameOfUsers";
import Chat from "./Chat/Chat";

const Dialogs = (props) => {

    return <div className={s.main}>

        <NameOfUsers dialogs={props.dialogs}/>

        <Chat messages={props.messages}/>

    </div>;
}


export default Dialogs;