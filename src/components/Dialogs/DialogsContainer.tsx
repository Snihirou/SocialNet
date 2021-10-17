import React from 'react';
import {addMessageAC, onMassageChangeAC} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = (props) => {


//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState()
//
//                 let addMessage = () => {
//                     store.dispatch(addMessageAC())
//                 }
//                 let onMassageChange = (post) => {
//                     let action = onMassageChangeAC(post)
//                     store.dispatch(action)
//                 }
//                 return <Dialogs addMessage={addMessage}
//                                 onMassageChange={onMassageChange}
//                                 dialogPage={state.dialogPage}
//                 />
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }
let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        onMassageChange: (post) => {
            let action = onMassageChangeAC(post)
            dispatch(action)
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;