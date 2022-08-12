import React from "react";
import s from './Profile.module.css';
import Navbar from "./Navbar/Navbar";
import MyPosts from "./MyPosts/MyPosts";
import Dialogs from "./Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";


const Profile = (props) => {

    return <div className={s.content}>

        <Navbar/>
        <Routes>
            <Route path="/pos/*" element={<MyPosts
                profilePage={props.profilePage}
                dispatch={props.dispatch}
            />}
            />
            <Route path="/dialogs/*" element={<Dialogs
                messagesPage={props.messagesPage}
                dispatch={props.dispatch}
            />}
            />
        </Routes>

    </div>
    ;
}

export default Profile;