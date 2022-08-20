import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt='' src='https://www.m24.ru/b/d/nBkSUhL2jVUhkMi_PqzJrMCqzJ3w-pun2XyQ2q2C_2OZcGuaSnvVjCdg4M4S7FjDvM_AtC_QbIk8W7zj1GdwKSGT_w=MyOnIrmbPXU7oQwC_DObhA.jpg' />
            {props.message}
            <div>
                <span>likes {props.likes}</span>
            </div>
        </div>
    )

}

export default Post;