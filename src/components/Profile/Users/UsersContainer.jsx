import React from "react";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../../redux/users-reducer";
import Users from "./Users";



const mapDispatchToProps = (state) => {
    return {
        users: state.usersPage.users
    };
}

const mapStateToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    };
}

const UsersContainer = connect(mapDispatchToProps, mapStateToProps) (Users);

export default UsersContainer;

