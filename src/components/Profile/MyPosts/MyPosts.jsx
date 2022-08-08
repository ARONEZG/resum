import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'
import Myp from "./Myp/Myp";



const MyPosts = (props) => {
    const postsElements = props.profilePage.posts.map(
        post =>
            <Post id={post.id}
                  message={post.message}
                  likes={post.likesCount}/>
    );

    return <main className={s.main}>
        <div>
            <Myp addPost={props.addPost}
                 newPostText={props.profilePage.newPostText}
                 updateNewPostText={props.updateNewPostText}
            />
            <div className={" "}>
                {postsElements}
        </div>
    </div>
</main>
}

export default MyPosts;