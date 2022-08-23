import React from "react";
import proloader from "../../../assets/images/Spinner-1s-200px.svg";
import s from "../../Profile/Users/Users.module.css";




const Preloader = (props) => {

    return <img src={proloader} className={s.main}/>;
}


export default Preloader;