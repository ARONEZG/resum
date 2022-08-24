import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import Preloader from "../../common/Preloader/Preloader";



const MyPosts = (props) => {
    const newPostElement = React.createRef();
    const postsElements = props.posts.map(
        post =>
            <Post id={post.id}
                  message={post.message}
                  likes={post.likesCount}/>)

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    const  onAddPosts = () => {
        props.addPost();
    }
    if (!props.profileUser) {
        return <Preloader/>
    }

    return <main className={s.main}>
        <div className={s.profile}>
            <img src={props.profileUser.photos.large} alt=""/>
            {props.profileUser.aboutMe}
        </div>

        <div>My posts</div>

        <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>

        <button onClick={onAddPosts}>Add post</button>

        {postsElements}

    </main>;
}


export default MyPosts;