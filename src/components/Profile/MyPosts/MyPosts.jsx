import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return <div className={c.postsBlock}>
        <h3>My posts</h3>
        <AddPostReduxForm onSubmit={addNewPost}/>
        <div className={c.posts}>
            {postsElements}
        </div>
    </div>
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={"textarea"} placeholder={"Enter your message"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'ProfileAddPostForm'})(AddPostForm)


export default MyPosts;