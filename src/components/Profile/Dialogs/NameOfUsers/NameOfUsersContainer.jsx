import React from "react";
import s from "./NameOfUsers.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import NameOfUsers from "./NameOfUsers";
import {useDispatch, useSelector} from "react-redux";

const NameOfUsersContainer = (props) => {
    const messagesPage = useSelector(state => state.messagesPage);
    const dialogsElements = messagesPage.dialogs.map(
        dialog =>
            <DialogsItem id={dialog.id} name={dialog.name} />);

    return <NameOfUsers dialogsElements={dialogsElements}/>
}


export default NameOfUsersContainer;