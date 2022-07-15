import {useState} from "react";

export const Counter = ()=>{

    const [likes, setLikes] = useState(0)
    const [value, setValue] = useState('write the text')
    const icrement = () => {
        setLikes(likes + 1)
    }
    const decrement = () => {
        setLikes(likes - 1)
    }
    return (

        <div>
            <h3>{likes}</h3>
            <h3>{value}</h3>
            <input type="text" value={value} placeholder={'write the text'} onChange={event => setValue(event.target.value)}/>
            <button onClick={icrement}>icrement</button>
            <button onClick={decrement}>decrement</button>

        </div>
    )
}

