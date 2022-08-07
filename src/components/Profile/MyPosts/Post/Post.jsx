import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt='' src='https://www.meme-arsenal.com/memes/6b18553dd22b9010f674e72f5b38698e.jpg' />
            {props.message}
            <div>
                <span>likes {props.likes}</span>
            </div>
        </div>
    )

}

export default Post;