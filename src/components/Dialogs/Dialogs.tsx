import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = () => {

    const dialogData = [
        {id:1, name:"Alexandro"},
        {id:2, name:"Natasha"},
        {id:3, name:"Vlad"},
        {id:4, name:"Dasha"},
        {id:5, name:"Gregory"},
    ]

    const messages = [
        {id:1, message:"Hello"},
        {id:2, message:"How is your day?"},
        {id:3, message:"Amazing"},
    ]

    let dialogsElements = dialogData.map(d =>
        <DialogItem name={d.name} id={d.id}/>
    )

    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className= {s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs