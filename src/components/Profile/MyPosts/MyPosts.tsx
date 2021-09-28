import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

type MyPostsType = {

}


const MyPosts = (props) => {
// const { posts } = props;
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        let text = newPostElement.current?.value
        props.addPost(text);
        props.updateNewPostText("")
    }
    let onPostChange = () => {
        let text = newPostElement.current?.value
        props.updateNewPostText(text)
    }


    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts