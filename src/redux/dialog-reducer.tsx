const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialState = {
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
    // newMessageText: ""
}

export const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
            ...state,
            messages: [...state.messages, {id: 6, message: action.newMessageBody}]
        }
        // case UPDATE_NEW_MESSAGE_TEXT:
        //     return {
        //         ...state,
        //         newMessageBody: action.newMessageBody
        //     }
        default:
            return state
    }
}

export const addMessageAC = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})


export const onMassageChangeAC = (post) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: post})


// if (action.type === ADD_MESSAGE) {
//     let newMessage = {
//         id: 6,
//         message: state.newMessageText
//     }
//     state.messages.push(newMessage)
//     state.newMessageText = "";
// } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
//     state.newMessageText = action.newMessage
// }