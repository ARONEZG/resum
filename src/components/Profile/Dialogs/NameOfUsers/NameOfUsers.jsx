import React from "react";
import s from "./NameOfUsers.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";


const NameOfUsers = (props) => {

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {props.dialogsElements}
        </div>
        <div className={s.form}>
            <textarea/>
            <button>
                Add dialog
            </button>
        </div>
    </div>
}


export default NameOfUsers;