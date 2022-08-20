import React from "react";
import s from './Dialogs.module.css';
import NameOfUsers from "./NameOfUsers/NameOfUsers";
import ChatContainer from "./Chat/ChatContainer";
import NameOfUsersContainer from "./NameOfUsers/NameOfUsersContainer";

const Dialogs = (props) => {

    return <div className={s.main}>

        <NameOfUsersContainer />
        <ChatContainer />

    </div>;
}


export default Dialogs;