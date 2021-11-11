const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

type PostsType = {
    id: number;
    message: string;
    likesCount: number
}

type StateType = {
    posts: Array<PostsType>
    newPostText: string
    profile: null
}

let initialState: StateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'Its my first post', likesCount: 20}
    ],
    newPostText: "",
    profile: null
}

export const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: 1}],
                newPostText: ""
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

type ActionsTypes = AddPostACType | OnPostChangeACType | SetUserProfileACType


type AddPostACType = {
    type: typeof ADD_POST
}
export const addPostAC = () => ({type: ADD_POST})
type OnPostChangeACType = {
    type: typeof UPDATE_NEW_POST_TEXT;
    newText: string
}
export const onPostChangeAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
type SetUserProfileACType = {
    type: typeof SET_USER_PROFILE;
    profile: string
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

