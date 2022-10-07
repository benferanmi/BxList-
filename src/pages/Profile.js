import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import './profile.css'
const Profile = () => {

    const userName = localStorage.getItem('username')
    const nameref =  useRef()


    const handleSubmit = () => {
        const name = nameref.current.value
        localStorage.setItem('username', name)
        console.log(name)
    }


    if (userName) {
         console.log(true)
    } else {
        console.log(false)
        return (
            <>
            <input type="text" name="name" ref={nameref}/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            </>
        )
    }
    console.log(userName)
  return (
    <div className='profile'>
        <h1>
            Profile
        </h1>

        <p> welcome, {userName}</p>
    </div>
  )
}

export default Profile