import React from "react"
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setusersAC, unfollowAC} from "../../redux/users-reducer";


let mapSateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setusersAC(users))
        }
    }
}

export default connect(mapSateToProps, mapDispatchToProps)(Users)