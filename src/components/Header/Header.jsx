import React from "react";
import s from './Header.module.css';

const Header = () =>
    <header class={s.header}>
        <div class="one">
            <div>
                <h1>Website</h1>
            </div>
        </div>

        <div>

            <ul class={s.navbar}>
                <li><h3>Education</h3></li>
                <li><h3>About me</h3></li>
                <li><h3>Skills</h3></li>
            </ul>

        </div>

    </header>



export default Header;
