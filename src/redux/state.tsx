import {rerenderEntireTree} from "../render";


type MessagesType = {
    id: number;
    message: string
}

type DialogDataType = {
    id: number;
    name: string
}

type PostsType = {
    id: number;
    message: string;
    likesCount: number
}

type ProfilePageType ={
    posts: Array<PostsType>
    newPostText: string
}

type DialogPageType ={
    dialogData: Array<DialogDataType>
    messages: Array<MessagesType>
}

type RootStateType = {
    dialogPage: DialogPageType;
    profilePage: ProfilePageType
}

let state: RootStateType = {

    dialogPage: {
        dialogData: [
            {id:1, name:"Alexandro"},
            {id:2, name:"Natasha"},
            {id:3, name:"Vlad"},
            {id:4, name:"Dasha"},
            {id:5, name:"Gregory"},
        ],

        messages: [
            {id:1, message:"Hello"},
            {id:2, message:"How is your day?"},
            {id:3, message:"Amazing"},
        ]
    },

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'Its my first post', likesCount: 20},
        ],
        newPostText: "ittt"

    },

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 1
    }
    state.profilePage.posts.push(newPost)
   rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}
export default state

