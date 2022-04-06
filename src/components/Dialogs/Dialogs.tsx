import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../redux/store";
import {reduxForm ,Field} from "redux-form";
import {Textarea} from "../common/FormsControls/FormControls";
import {maxLengthCreator} from "../../utils/validators/validators";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

export type MapStateToPropsType = {
    dialogPage: DialogPageType
}

type MapDispatchToPropsType = {
    addMessage: (newMessageBody) => any
    onMassageChange: (post) => any
    addNewMessage: (values) => any
}

const Dialogs: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
    let state = props.dialogPage

    let dialogsElements = state.dialogData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>)


    // let addMessage = () => {
    //     props.addMessage()
    // }
    // let onMassageChange = (e) => {
    //     let post = e.target.value
    //     props.onMassageChange(post)
    //
    // }
    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)

    }

    // if(!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}

export default Dialogs

