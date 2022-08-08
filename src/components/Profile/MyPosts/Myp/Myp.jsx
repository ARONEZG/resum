import React from "react";


const inputWindow = (props) => {

    const newPostElement = React.createRef();
    debugger;
    const textInPost = () => {
        const text = newPostElement.current.value;
        props.addPost(text);
    }

        return <div> My posts
        <div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={textInPost}>Add post</button>
        </div>
    </div>;
}

export default inputWindow;