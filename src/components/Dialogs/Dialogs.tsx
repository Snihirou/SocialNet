import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogData.map(d =>
        <DialogItem name={d.name} id={d.id}/>
    )
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    let newMessage = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => {
        let post = newMessage.current?.value
        alert(post)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessage}></textarea>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs