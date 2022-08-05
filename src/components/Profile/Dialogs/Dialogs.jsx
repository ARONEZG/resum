import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>;
}

const Message = (props) => {

    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => <div className={s.main}>
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogItem name='Artem' id='1' />
            <DialogItem name='Artem' id='1' />
            <DialogItem name='Artem' id='1' />
            <DialogItem name='Artem' id='1' />
            <DialogItem name='Artem' id='1' />
            <DialogItem name='Artem' id='1' />

        </div>
    </div>

    <div className={s.messages}>
        <div className={s.dialog + ' ' + s.active}>Hi</div>
        <Message message="Hiiiiiiiiii"/>
        <Message message="Hiiiiiiiiii"/>
    </div>

</div>



export default Dialogs;