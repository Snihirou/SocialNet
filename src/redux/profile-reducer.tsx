const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

type PostsType = {
    id: number;
    message: string;
    likesCount: number
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'Its my first post', likesCount: 20},
    ],
    newPostText: ""
}

export const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 1
            }
            state.posts.push(newPost)
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const onPostChangeAC = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

// if (action.type === ADD_POST) {
//     const newPost: PostsType = {
//         id: 5,
//         message: state.newPostText,
//         likesCount: 1
//     }
//     state.posts.push(newPost)
//     state.newPostText = "";
//
// } else if (action.type === UPDATE_NEW_POST_TEXT) {
//     state.newPostText = action.newText
// }
