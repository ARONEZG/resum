import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'

const Myp = () => {

    const newPostElement = React.createRef();
    debugger;
    const addPost = () => {
        const text = newPostElement.current.value;
        alert(text);
    }

        return <div> My posts
        <div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>Add post</button>
        </div>
    </div>;
}

const MyPosts = (props) => {


    const postsElements = props.posts.map(post => <Post id={post.id} message={post.message} likes={post.likesCount}/>);

    return <main className={s.main}>
    <div>
        <Myp/>
        <div className={" "}>
            {postsElements}
        </div>
    </div>
</main>
}

export default MyPosts;