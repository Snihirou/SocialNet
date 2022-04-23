import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.descriptionblock}>
                <img src={profile.photos.large} />
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div>{profile.aboutMe}</div>
                <div>{profile.contacts.facebook}</div>
                <div>{profile.contacts.vk}</div>
                <div>{profile.contacts.github}</div>
                <div>{profile.lookingForAJobDescription}</div>
                <div>{profile.fullName}</div>
                <div>{profile.userId}</div>
            </div>
        </div>
    )
}
export default ProfileInfo