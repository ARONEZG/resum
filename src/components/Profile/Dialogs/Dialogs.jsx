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

const Dialogs = (props) => {

    const dialogsData = [
        { id: 1, name: 'Artem'},
        { id: 2, name: 'Arseny'},
        { id: 3, name: 'Sasha'},
        { id: 4, name: 'Ilya'},
        { id: 5, name: 'Dima'},
        { id: 6, name: 'Misha'},
    ]

    const messagesData = [
        { id: 1, messages: 'Artembfdbfdf'},
        { id: 2, messages: 'Arsenyfbddbdfdb'},
        { id: 3, messages: 'Sashal;k;klp'},
        { id: 4, messages: 'Ilya;fkvflkvmlv'},
        { id: 5, messages: 'Dimaéc;l;kll'},
        { id: 6, messages: 'Mishasdl;llfkd'},
    ]
return <div className={s.main}>
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

</div>;
}


export default Dialogs;