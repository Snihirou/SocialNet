import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    alt='profile info'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHvc5gyxsV8CQUZKWlPAkl5wh54qE3CRyBlA&usqp=CAU"/>
            </div>
            <div className={s.descriptionblock}>ava+description</div>
        </div>
    )
}
export default ProfileInfo