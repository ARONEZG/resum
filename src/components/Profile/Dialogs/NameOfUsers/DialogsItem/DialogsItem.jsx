import React from "react";
import s from './DialogsItem.module.css';
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
    const path = "/dialogs/" + props.id;
    return <div className={s.active}>
        <NavLink to={path} className={({ isActive }) => isActive ? `${s.dialogsItems} ${s.active}` : s.item}>
            {props.name}
        </NavLink>
    </div>;
}




export default DialogsItem;