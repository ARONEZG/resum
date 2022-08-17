import React from "react";
import Post from './Post/Post'
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";



const MyPostsContainer = (props) => {



    return <StoreContext.Consumer>
        {
        (store) => {
            const postsElements = store.getState().profilePage.posts.map(
                post =>
                    <Post id={post.id}
                          message={post.message}
                          likes={post.likesCount}/>
            );

            return <MyPosts posts={postsElements} store={store}/>}
    }
    </StoreContext.Consumer>
}

export default MyPostsContainer;