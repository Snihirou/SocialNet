import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogData.map(d =>
        <DialogItem key={d.id} name={d.name} id={d.id}/>
    )
    let messagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)

    let newMessage = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => {
        props.addMessage()
    }
    let onMassageChange = () => {
        let post = newMessage.current?.value
        props.updateNewMessageText(post)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={onMassageChange}
                          ref={newMessage}
                          value={props.newMessageText}/>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs