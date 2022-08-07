import React from "react";
import s from './Header.module.css';

const Header = () =>
    <header className={s.header}>
        <div class="one">
            <div>
                <h1>Website</h1>
            </div>
        </div>

        <div>

            <ul className={s.navbar}>
                <li className={s.li} ><h3>
                    Education
                </h3></li>
                <li className={s.li} ><h3>About me</h3></li>
                <li className={s.li} ><h3>Skills</h3></li>
            </ul>

        </div>

    </header>



export default Header;
