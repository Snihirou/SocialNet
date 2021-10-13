import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {addMessageAC, onMassageChangeAC} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogPage

    let addMessage = () => {
        props.store.dispatch(addMessageAC())
    }
    let onMassageChange = (post) => {
        let action = onMassageChangeAC(post)
        props.store.dispatch(action)
    }

    return (
        <Dialogs store={props.store}
                 addMessage={addMessage}
                 onMassageChange={onMassageChange}
                 dialogPage={state}/>
    )
}
export default DialogsContainer

