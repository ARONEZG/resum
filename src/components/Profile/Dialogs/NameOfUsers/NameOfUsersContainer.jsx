import React from "react";
import s from "./NameOfUsers.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import NameOfUsers from "./NameOfUsers";

const NameOfUsersContainer = (props) => {
    const dialogsElements = props.store.getState().messagesPage.dialogs.map(
        dialog =>
            <DialogsItem id={dialog.id} name={dialog.name} store={props.store}/>);

    return <NameOfUsers dialogsElements={dialogsElements}/>
}


export default NameOfUsersContainer;