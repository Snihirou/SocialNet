import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const Dialogs = () => {
    return (
        <div className= {s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Alexandro</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Natasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Vlad</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Dasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Gregory</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How is your day?</div>
                <div className={s.message}>Amazing</div>
            </div>
        </div>
    )
}
export default Dialogs