import {profileAPI, usersAPI} from "../api/api";
import {setUsers, setUsersTotalCount, toggleIsFetching} from "./users-reducer";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"

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
        case DELETE_POST:
            return {
                ...state,
                post: state.posts.filter(p => p.id != action.postId)
            }
        default:
            return state
    }
}

type ActionsTypes = AddPostACType | SetUserProfileACType | SetStatusACType | deletePost


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

type deletePost = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId) => ({type: DELETE_POST, postId})


type SetStatusACType = {
    type: typeof SET_STATUS;
    status: string
}
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}