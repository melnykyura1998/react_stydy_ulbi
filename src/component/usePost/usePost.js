import React from 'react';
import {useMemo} from "react";

export const useSortedPosts = (posts,sort) => {
    const sortedPosts= useMemo(()=>{
        console.log('+')
        if(sort){
            return [...posts].sort((a,b)=>a[sort].localeCompare(b[sort]))
        }
        return posts
    },[sort,posts])
    return sortedPosts
};


export const usePosts = (posts,sort,word) => {
    const sortedPosts = useSortedPosts(posts,sort)
    const sortedAndSearchedPosts= useMemo(()=>{
        return sortedPosts.filter(post=>post.title.toLowerCase().includes(word))
    },[word,sortedPosts])


return sortedAndSearchedPosts
};

