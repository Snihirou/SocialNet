import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


type MyPostsType = {}


const MyPosts = (props) => {
// const { posts } = props;
    let postsElements = props?.posts?.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current?.value
        props.onPostChange(text)
    }

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea placeholder="Enter your post"
                              onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts