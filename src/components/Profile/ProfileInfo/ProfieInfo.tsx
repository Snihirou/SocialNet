import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img
                    alt='profile info'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHvc5gyxsV8CQUZKWlPAkl5wh54qE3CRyBlA&usqp=CAU"/>
            </div>
            <div className={s.descriptionblock}>
                <img src={props.profile.photos.large} />
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.contacts.github}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.userId}</div>
            </div>
        </div>
    )
}
export default ProfileInfo