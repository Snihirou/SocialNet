import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";

// const ADD_POST = "ADD-POST"
// const ADD_MESSAGE = "ADD-MESSAGE"
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

type MessagesType = {
    id: number;
    message: string
}

type DialogDataType = {
    id: number;
    name: string
}

export type PostsType = {
    id: number;
    message: string;
    likesCount: number
}

type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: string
}

export type DialogPageType = {
    dialogData: Array<DialogDataType>
    messages: Array<MessagesType>
    newMessageText: string
}

type SidebarType = {}

export type RootStateType = {
    dialogPage: DialogPageType;
    profilePage: ProfilePageType
    sidebar: SidebarType
}


type StoreType = {
    _state: RootStateType
    // addPost: () => void
    // addMessage: () => void
    // updateNewPostText: (newText: string) => void
    // updateNewMessageText: (newMessage) => void
    getState: () => RootStateType
    _rerenderEntireTree: (state) => void
    subscribe: (observer) => void
    dispatch: (action: { type: string, payload: any }) => void
}

type AddPostActionType = {
    type: "ADD-POST"
}

type AddMessageActionType = {
    type: "ADD-MESSAGE"
}

type updateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

type updateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newMessage: string
}
type ActionTypes =
    AddPostActionType
    | AddMessageActionType
    | updateNewPostTextActionType
    | updateNewMessageTextActionType


let store: StoreType = {
    _state: {
        dialogPage: {
            dialogData: [
                {id: 1, name: "Alexandro"},
                {id: 2, name: "Natasha"},
                {id: 3, name: "Vlad"},
                {id: 4, name: "Dasha"},
                {id: 5, name: "Gregory"},
            ],

            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "How is your day?"},
                {id: 3, message: "Amazing"},
            ],
            newMessageText: ""
        },

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'Its my first post', likesCount: 20},
            ],
            newPostText: "",
            profile: ""

        },
        sidebar: {}
    },

    _rerenderEntireTree(state) {
        console.log("state_5051")
    },

    getState() {
        debugger
        return this._state
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer
    },

    dispatch(action) {
        // this._state.profilePage = profileReducer(this._state.profilePage, action);
        // this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        // this._rerenderEntireTree(this._state)
    },

}
export default store











