import React from "react";
import s from './Profile.module.css';
import Navbar from "./Navbar/Navbar";
import MyPosts from "./MyPosts/MyPosts";
import Dialogs from "./Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Profile = () =>
    <div className={s.content}>
        <BrowserRouter>
            <Navbar />
        
            <Routes>
                <Route path="/pos/*" element={<MyPosts />} />
                <Route path="/dialogs/*" element={<Dialogs />} />
            </Routes>
        


        </BrowserRouter>
    </div>

export default Profile;