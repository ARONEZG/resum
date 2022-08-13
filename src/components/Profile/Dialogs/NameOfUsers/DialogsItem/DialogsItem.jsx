import React from "react";
import s from './DialogsItem.module.css';
import { NavLink } from "react-router-dom";
import dialogs from "../../Dialogs";
import {currentIdActionCreator} from "../../../../../redux/state";

const DialogsItem = (props) => {
    const path = "/dialogs/" + props.id;

    return <div className={s.active}>
        <NavLink to={path}
                 className={({isActive}) => {
                     if(isActive) {
                         const currentId = props.id;
                         const action = currentIdActionCreator(currentId);
                         props.dispatch(action);
                         return `${s.dialogsItems} ${s.active}`;
                     }
                     return s.item;
                 }}
        >
            {props.name}
        </NavLink>
    </div>;
}




export default DialogsItem;