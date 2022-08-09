import React from "react";


const inputWindow = (props) => {
    const newPostElement = React.createRef();

    const textInPost = () => {
        debugger;
        props.addPost();
    }
    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
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