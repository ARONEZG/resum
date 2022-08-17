import React from "react";
import s from './Dialogs.module.css';
import NameOfUsers from "./NameOfUsers/NameOfUsers";
import ChatContainer from "./Chat/ChatContainer";
import NameOfUsersContainer from "./NameOfUsers/NameOfUsersContainer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";

const DialogsContainer = (props) => {

    return (<StoreContext.Consumer>
        {
            (store) => {

                return <Dialogs store={store}/>
            }
    }
    </StoreContext.Consumer>);
}


export default DialogsContainer;