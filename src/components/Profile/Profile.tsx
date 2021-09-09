import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHvc5gyxsV8CQUZKWlPAkl5wh54qE3CRyBlA&usqp=CAU"/>
            <div>ava+description</div>
            <MyPosts/>
        </div>
    )
}
export default Profile