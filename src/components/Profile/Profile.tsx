import React from 'react';
// import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfieInfo";



const Profile = (props) => (
    <div>
        <ProfileInfo/>
        <MyPosts posts ={props.state.posts} addPost={props.addPost}/>
        {/*<MyPosts {...props}/>*/}
    </div>
);

export default Profile