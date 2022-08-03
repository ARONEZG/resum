import React from "react";
import s from './Navbar.module.css';

const Navbar = () => <nav className={s.navbar}>
    <div className={s.item}>
        <a href="/pos">Profile</a>
    </div>
    <div className={`${s.item} ${s.active}`}>
        <a href="/dialogs">Messages</a>
    </div>
    <div className={s.item}>
        <a>News</a>
    </div>
    <div className={s.item}>
        <a>Music</a>
    </div>
    <div className={s.item}>
        <a>Settings</a>
    </div>
</nav>


export default Navbar;