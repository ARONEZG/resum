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

const MyPosts = () => { 
    const postsData = [
        { id: 1, message: 'Hi, how are you?', likesCount: 1},
        { id: 2, message: 'Hi, how are you?', likesCount: 1},
        { id: 3, message: 'Hi, how are you?', likesCount: 1},
        { id: 4, message: 'Hi, how are you?', likesCount: 1},
        { id: 5, message: 'Hi, how are you?', likesCount: 1},
        { id: 6, message: 'Hi, how are you?', likesCount: 1},
    ]
    return <main className={s.main}>
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
}

export default MyPosts;