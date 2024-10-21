import { useEffect, useState } from "react"
import Friend from "./Friend.jsx"
import "./Friends.css"

export default function Friends() {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setFriends(data))
    }, [])

    return (
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {friends.map((friend) => (
                <Friend key={friend.id} friend={friend}></Friend>
            ))}
        </div>
    )
}

/**
 *  1. state to hold data
 *  2. use effect with dependencies array
 *  3. use fetch to load data
 *  4. set loaded data to the state
 *  5. display data on the component
 **/
