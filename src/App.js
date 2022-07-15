import {Counter} from "./component/Counter";
import {ClassCounter} from "./component/ClassCounter";
import Post from "./component/post";
import {useEffect, useMemo, useState} from "react";
import './styles/APP.css'
import Posts from "./component/posts";
import MyButton from "./component/UI/MyButtom/MyButton";
import MyInput from "./component/UI/MyInput/MyInput";
import PostForm from "./component/PostForm";
import MySelect from "./component/UI/MySelect/MySelect";
import PostFilter from "./component/postFilter";
import MyModal from "./component/UI/MyModal/MyModal";
import {usePosts} from "./component/usePost/usePost";
import {postsService} from "./component/services/posts.service";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'js', body: 'sfwfdetretgfewg'},
        {id: 2, title: 'python', body: 'afewfdetretgfewg'},
        {id: 3, title: 'c++', body: 'ewfdetretegfewgfewg'}
    ])
    const[filetr,setFilter]=useState({sort:'',word:''})
    const[modal,setModal]=useState(false)
    const sortedAndSearchedPosts = usePosts(posts,filetr.sort,filetr.word)
    const[loading,setLoading]=useState(false)
    const[totalCount, setTotalCount] = useState(0)
    const[limit,setLimit]= useState(10)
    const[page,setPage]= useState(1)

    useEffect(()=>{
        setLoading(true)
        postsService.getAll(limit,page).then(({data})=>setPosts(data))
        setLoading(false)
    },[])








    const CreatePost = (NewPost) => {
        setPosts([...posts, NewPost])

    }
    const RemovePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))

    }


    return (
        <div className='APP'>
            <MyButton onClick={() => setModal(true)}>Create post</MyButton>
            <MyModal visible={modal} setVisible={setModal}><PostForm create={CreatePost}/></MyModal>
           <PostFilter filter={filetr} setFilter={setFilter} />
            {loading? 'loading....':<Posts RemovePost={RemovePost} posts={sortedAndSearchedPosts} title={'List of posts'}/>}

        </div>
    )

}

export default App;
