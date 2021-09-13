import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/"+ props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    const dialogData = [
        {id:1, name:"Alexandro"},
        {id:2, name:"Natasha"},
        {id:3, name:"Vlad"},
        {id:4, name:"Dasha"},
        {id:5, name:"Gregory"},
    ]



    const messageData = [
        {id:1, message:"Hello"},
        {id:2, message:"How is your day?"},
        {id:3, message:"Amazing"},
    ]

    return (
        <div className= {s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
            </div>
        </div>
    )
}
export default Dialogs