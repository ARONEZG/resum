import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redux/state";

const inputWindow = (props) => {
    const newPostElement = React.createRef();



    const textInPost = () => {
        props.dispatch(addPostActionCreator());
    }
    const onPostChange = () => {
        const text = newPostElement.current.value;
        const action = updateNewPostActionCreator(text);
        props.dispatch(action);
    }

    return <div> My posts
        <div>
            <textarea
                ref={newPostElement}
                value={props.newPostText}
                onChange={onPostChange}
            />
            <button onClick={textInPost}>Add post</button>
        </div>
    </div>;
}

export default inputWindow;