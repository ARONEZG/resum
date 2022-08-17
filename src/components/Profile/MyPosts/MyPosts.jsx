import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'
import Myp from "./Myp/Myp";
import MypContainer from "./Myp/MypContainer";



const MyPosts = (props) => <main className={s.main}>
        <div>
            <MypContainer store={props.store}/>
            <div className={" "}>
                {props.posts}
            </div>
        </div>
    </main>



export default MyPosts;