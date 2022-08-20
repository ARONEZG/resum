import React from "react";
import s from './Profile.module.css';
import Navbar from "./Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";


const Profile = (props) => {

    return <div className={s.content}>

        <Navbar/>
        <Routes>
            <Route path="/pos/*" element={<MyPostsContainer/>}
            />
            <Route path="/dialogs/*" element={<DialogsContainer/>}
            />
            <Route path="/users/*" element={<UsersContainer/>}
            />
        </Routes>

    </div>
    ;
}

export default Profile;