import React from "react";
import s from './Profile.module.css';
import Navbar from "./Navbar/Navbar";
import MyPosts from "./MyPosts/MyPosts";
import Dialogs from "./Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Profile = (props) =>
    <div className={s.content}>

            <Navbar />
            <Routes>
                <Route path="/pos/*" element={<MyPosts posts={props.posts}/>} />
                <Route path="/dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
            </Routes>

    </div>

export default Profile;