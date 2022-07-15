import React from 'react';
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButtom/MyButton";
import {useState} from "react";

const PostForm = ({create}) => {

    const AdNewPost = (e) => {
        e.preventDefault()
       const NewPost = {...post,id:Date.now()}
        setPost({title:'',body:''})
        create(NewPost)


    }

    const[post,setPost]=useState({title:'',body:''})
    return (
        <div>
            <form>
                <MyInput type={"text"} value={post.title} placeholder={'post name'} onChange={e=>setPost({...post, title:e.target.value})} />
                <MyInput type={'text'} value={post.body} placeholder={'post body'}onChange={e=>setPost({...post, body:e.target.value})} />
                <MyButton onClick={AdNewPost} >Create post</MyButton>
            </form>
        </div>
    );
};

export default PostForm;