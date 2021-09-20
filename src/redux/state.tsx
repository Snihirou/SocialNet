// type MessagesType = {
//     id: number;
//     message: string
// }
//
// type DialogType = {
//     id: number;
//     name: string
// }
//
// type PostsType = {
//     id: number;
//     message: string;
//     likesCount: number
// }
//
// type ProfilePageType ={
//     posts: Array<PostsType>
// }
//
// type DialogPageType ={
//     dialogData: Array<DialogType>
//     messages: Array<MessagesType>
// }

let state = {

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
        ]
    },
    sidebar: {

    }
}
export default state
