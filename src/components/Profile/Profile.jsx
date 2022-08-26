import React from "react";
import Navbar from "./Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css"


const Profile = (props) => {

    return <div className={s.content}>

        <Navbar/>
        <Routes>
            <Route path="/profile/:userId" element={<MyPostsContainer/>}
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