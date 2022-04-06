import {profileAPI, usersAPI} from "../api/api";
import {setUsers, setUsersTotalCount, toggleIsFetching} from "./users-reducer";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

type PostsType = {
    id: number;
    message: string;
    likesCount: number
}

type StateType = {
    posts: Array<PostsType>
    profile: null
    status: string
}

let initialState: StateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'Its my first post', likesCount: 20}
    ],
    profile: null,
    status: ""
}

export const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, posts: [...state.posts, {id: 5, message: action.newPostText, likesCount: 1}],
                newPostText: ""
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

type ActionsTypes = AddPostACType | SetUserProfileACType | SetStatusACType


type AddPostACType = {
    type: typeof ADD_POST;
    newPostText: string
}
export const addPostAC = (newPostText) => ({type: ADD_POST, newPostText})
// type OnPostChangeACType = {
//     type: typeof UPDATE_NEW_POST_TEXT;
//     newText: string
// }
// export const onPostChangeAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
type SetUserProfileACType = {
    type: typeof SET_USER_PROFILE;
    profile: string
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

type SetStatusACType = {
    type: typeof SET_STATUS;
    status: string
}
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}