import React from 'react';
import classes from "./post.module.css";
import MyButton from "./UI/MyButtom/MyButton";

const Post = ({post,RemovePost}) => {
    // console.log(post);
    return (
        <div className={classes.post}>
            <div>

                <strong>{post.id}.{post.title}</strong>

                <div>{post.body}</div>
            </div>
            <div>
                <MyButton onClick={ ()=> RemovePost(post)} >{'delete'}</MyButton>
            </div>

        </div>
    );
};

export default Post;