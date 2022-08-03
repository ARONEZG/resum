import React from "react";
import s from './Profile.module.css';
import Navbar from "./Navbar/Navbar";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => <div className={s.content}>
    <Navbar/>
    <MyPosts/>
</div>

export default Profile;