import React from 'react';
import MyInput from "./UI/MyInput/MyInput";
import MySelect from "./UI/MySelect/MySelect";

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
            <MyInput placeholder='search of'
                     value={filter.word}
                     onChange={e=>setFilter({...filter,word:e.target.value})}/>
            <hr style={{margin: '15px'}}/>
            <MySelect
                value={filter.sort}
                onChange={selectedSort=> setFilter({...filter,sort:selectedSort}) }
                defaultValue='sort of'
                options={[{value: 'title', name: 'name'},
                    {value: 'body', name: 'body'}
                ]}/>
        </div>
    );
};

export default PostFilter;