import React from "react";
import s from './Profile.module.css';
import Navbar from "./Navbar/Navbar";
import Dialogs from "./Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";


const Profile = (props) => {

    return <div className={s.content}>

        <Navbar/>
        <Routes>
            <Route path="/pos/*" element={<MyPostsContainer />}
            />
            <Route path="/dialogs/*" element={<DialogsContainer store={props.store}/>}
            />
        </Routes>

    </div>
    ;
}

export default Profile;