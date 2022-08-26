import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () =>
    <header className={s.header}>
        <div className="one">
            <div>
                <h1>Website</h1>
            </div>
        </div>

        <div className={s.loginBlock}>

      <NavLink to={'/login'}>login</NavLink>

        </div>

    </header>



export default Header;
