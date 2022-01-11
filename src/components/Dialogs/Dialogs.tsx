import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {addMessageAC, onMassageChangeAC} from "../../redux/dialog-reducer";
import {Redirect} from 'react-router-dom';

const Dialogs = (props) => {
    let state = props.dialogPage

    let dialogsElements = state.dialogData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>)


    let addMessage = () => {
        props.addMessage()
    }
    let onMassageChange = (e) => {
        let post = e.target.value
        props.onMassageChange(post)

    }

    if(!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea placeholder="Enter your message"
                          onChange={onMassageChange}
                    //ref={newMessage}
                          value={state.newMessageText}/>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs

