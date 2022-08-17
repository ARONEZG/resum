import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redux/state";
import Myp from "./Myp";

const MypContainer = (props) => {

    const newPostElement = React.createRef();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    const onPostChange = () => {
        const text = newPostElement.current.value;
        const action = updateNewPostActionCreator(text);
        props.store.dispatch(action);

    }

    return <Myp updateNewPostText={onPostChange}
                addPost={addPost}
                referenceByTextArea={newPostElement}
                textValue={ props.store.getState().profilePage.newPostText}/>;
}

export default MypContainer;