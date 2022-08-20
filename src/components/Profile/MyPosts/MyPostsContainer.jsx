import React from "react";
import MyPosts from "./MyPosts";
import {connect, useDispatch, useSelector} from "react-redux";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";



const mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        updateNewPostText: (text) => {
            const action = updateNewPostActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;