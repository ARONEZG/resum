import React from "react";
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";


const Navbar = () => <nav className={s.navbar}>

    <div className={s.item}>
        <NavLink to="/pos" className={({ isActive }) => isActive ? s.activeLink : s.item}>Profile</NavLink>
    </div>
    <div className={s.item}>
        <NavLink to="/dialogs" className={({ isActive }) => isActive ? s.activeLink : s.item}>Messages</NavLink>
    </div>
    <div className={s.item}>
        <NavLink to="/users" className={({ isActive }) => isActive ? s.activeLink : s.item}>Users</NavLink>
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