import React from "react";
import s from './Navbar.module.css';

const Navbar = () => <nav className={s.navbar}>
    <div className={s.item}>
        Profile
    </div>
    <div className={`${s.item} ${s.active}`}>
        Messages
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