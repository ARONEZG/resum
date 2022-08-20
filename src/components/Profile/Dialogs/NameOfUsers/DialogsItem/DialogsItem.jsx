import React from "react";
import s from './DialogsItem.module.css';
import { NavLink } from "react-router-dom";
import dialogs from "../../Dialogs";
import {currentIdActionCreator} from "../../../../../redux/state";
import {useDispatch, useSelector} from "react-redux";

const DialogsItem = (props) => {
    const path = "/dialogs/" + props.id;
    const dispatch = useDispatch();
    return <div className={s.active}>
        <NavLink to={path}
                 className={({isActive}) => (isActive ? `${s.dialogsItems} ${s.active}` : s.item) } 
                 onClick={(click) => {
                    if(click) {
                        const currentId = props.id;
                        const action = currentIdActionCreator(currentId);
                        dispatch(action);
                    }
                }}
        >
            {props.name}
        </NavLink>
    </div>;
}




export default DialogsItem;