import React from 'react'
import { useState, useEffect } from 'react'
import axios from '../api/axios';

const User = () => {
    const [user, setuser] = useState();

    useEffect(() => {
        let isMounted = true;
        const Controller = new AbortController()

        const getUsers = async () => {
            try {
                // const responce = await axios.get('./users')
            } catch (err) {
                console.log(err)
            }
        }
    }, [])
  return (
    <div>
        <h2>User list </h2>

        {
             user?.length
             ? (
 
                 <ul>
                     {
                      user.map((users, i) => <li key={i}>
                                 {users?.username}
                             </li>
                      )   
                     }
                 </ul>
             ) : <p>no user to display</p>
        }

    </div>
  )
}

export default User