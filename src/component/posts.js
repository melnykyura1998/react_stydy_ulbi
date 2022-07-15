import React from 'react';
import Post from "./post";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Posts = ({posts, title,RemovePost}) => {
    if(posts.length){
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            <TransitionGroup>
            {posts.map(post=>
                <CSSTransition key ={post.id} timeout={500} classNames='post'>
            <Post post={post}  RemovePost={RemovePost} />
                </CSSTransition>)}
            </TransitionGroup>
        </div>)}
    else {
        return <h1>no posts</h1>
    }

};

export default Posts;