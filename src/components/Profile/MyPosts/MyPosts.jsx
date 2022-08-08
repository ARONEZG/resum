import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'
import Myp from "./Myp/Myp";


const MyPosts = (props) => {


    const postsElements = props.posts.map(
        post => <Post id={post.id} message={post.message} likes={post.likesCount}/>);

    return <main className={s.main}>
    <div>
        <Myp addPosts={props.addPosts}/>
        <div className={" "}>
            {postsElements}
        </div>
    </div>
</main>
}

export default MyPosts;