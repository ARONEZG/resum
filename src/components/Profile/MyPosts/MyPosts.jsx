import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'

const Myp = () => {

    return <div> My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
    </div>;
}

const MyPosts = () => <main className={s.main}>
    <div>
        <Myp/>
        <div className={" "}>
            <Post message='Hi, how are you?' />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </div>
</main>


export default MyPosts;