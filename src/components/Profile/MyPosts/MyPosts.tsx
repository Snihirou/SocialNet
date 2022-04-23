import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {reduxForm ,Field} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormControls";
import {Interface} from "readline";

interface MyPosts  {
    posts
    addPost
}

const MyPosts = React.memo<MyPosts>(props => {
    let postsElements = props?.posts?.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            My posts
            <AddNewPostForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});
const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} validate={[required, maxLength10]} placeholder={"Post message"}  />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
AddNewPostForm = reduxForm ({form: "ProfileAddNewPostForm"})(AddNewPostForm)
export default MyPosts