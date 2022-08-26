import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";
import axios from "axios";
import {setUserProfileAC} from "../../../redux/profile-reducer";
import withRouter from "./WithRouterWrapper";


class MyPostsContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + this.props.router.params.userId)
            .then((response) => {
                this.props.setUserProfile(response.data);
            });
    
        
    }

    componentDidUpdate() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + this.props.router.params.userId)
            .then((response) => {
                this.props.setUserProfile(response.data);
            });
    
        
    }

    render() {
        return <MyPosts {...this.props}/>;
    }
}

const mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profileUser: state.profilePage.profileUser,

    }
}


export default connect(mapStateToProps, {
    updateNewPostText: updateNewPostActionCreator,
    addPost: addPostActionCreator,
    setUserProfile: setUserProfileAC
})(withRouter(MyPostsContainer));
