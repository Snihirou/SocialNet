import React from 'react';
import {addPostAC, onPostChangeAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//
//                 let addPost = () => {
//                     store.dispatch(addPostAC());
//                 }
//
//                 let onPostChange = (text) => {
//                     let action = onPostChangeAC(text)
//                     store.dispatch(action)
//                 }
//                 return <MyPosts onPostChange={onPostChange}
//                                 addPost={addPost}
//                                 posts={store.getState().profilePage.posts}
//                                 newPostText={store.getState().profilePage.newPostText}/>
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostAC())},
        onPostChange: (text) => {
            let action = onPostChangeAC(text)
            dispatch(action)}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer