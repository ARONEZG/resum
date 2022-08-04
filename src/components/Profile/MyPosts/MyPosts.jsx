import React from "react";
import s from './MyPosts.module.css';

const MyPosts = () => <main className={s.main}>
    <div >
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>

    </div>

</main>


export default MyPosts;