import React from "react";
import s from './Dialogs.module.css';
import NameOfUsers from "./NameOfUsers/NameOfUsers";
import ChatContainer from "./Chat/ChatContainer";
import NameOfUsersContainer from "./NameOfUsers/NameOfUsersContainer";

const Dialogs = (props) => {

    return <div className={s.main}>

        <NameOfUsersContainer store={props.store}/>
        <ChatContainer store={props.store}/>

    </div>;
}


export default Dialogs;