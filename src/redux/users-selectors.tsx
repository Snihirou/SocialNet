import React from "react"
import {StateType} from "./users-reducer";
import {createSelector} from "reselect";

const getUsersSelector = (state: StateType)=> {
    return state.users
}

export const getUsers = createSelector(getUsersSelector,(users) => {
    return users.filter(u=> true)
})

export const getPageSize = (state: StateType)=> {
    return state.pageSize
}

export const getTotalUsersCount = (state: StateType)=> {
    return state.totalUsersCount
}

export const getCurrentPage = (state: StateType)=> {
    return state.currentPage
}

export const getIsFetching = (state: StateType)=> {
    return state.isFetching
}

export const getFollowingInProgress = (state: StateType)=> {
    return state.followingInProgress
}