import React, { useCallback } from "react";  
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './register.css'



const Signup = () => {
  const [info, setUserInfo] = useState('please enter your details')

  const [profileImg, setProfileImage] = useState()

  const [user, setUser] = useState(
    {firstname: '', lastname: '', email: '',
    username: '', password: '', passwordmatch: '',
  }
    )

  const navigate = useNavigate()

  const handleImageSubmit = (e) => {
    setProfileImage(e.target.files[0]) 
    // console.log(e.target.files[0].size)

    if (e.target.files[0].size > 6200) {
      window.alert(`file is greater that 5mb <br/> 
      please select a file between 1mb-5mb
      `)
    } else {
      window.alert('image upload sucessful')
    }
  }
  localStorage.setItem('signup', false)

  const handleSignUp = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({...user, [name]: value})
  }
  const handleSubmit = useCallback((e) => {
    e.preventDefault()

   const detailsRequired = user.password && user.email && user.firstname && user.lastname && user.passwordmatch && user.username

    if (detailsRequired && user.password === user.passwordmatch ) { 
    localStorage.setItem('mydetails', JSON.stringify(user))
    localStorage.setItem('profileimage', profileImg)

    localStorage.setItem('autenticated', true)
    localStorage.setItem('signup', true)

    navigate('/login')
    
    setUser({firstname: '', lastname: '', 
    username: '', password: '', passwordmatch: '',})
    }
    else {
     window.alert(info)
    }

  }, [info, navigate, profileImg, user])


  return (
    <div className="register">
      <section className="SignUp">
        <h1>Register </h1>        
        <form>

          
        <label htmlFor="firstname">
          First Name
        <input 
        type="text" 
        name="firstname"
        id="firstname" 
        onChange={handleSignUp}
        value={user.firstname}
        />
      </label>


      <label htmlFor="lastname">
        Last Name 
        <input 
        type="text" 
        name="lastname"
        id="lastname" 
        onChange={handleSignUp}
        value={user.lastname}
        
        />

        </label>

          
        <label htmlFor="username">
            Username
        <input 
        type="text" 
        name="username"
        id="username"
        onChange={handleSignUp}
        value={user.username}
        autoComplete='off'
        
        />

        </label>

        <label htmlFor="email">
            Email
        <input 
        type="email" 
        name="email"
        id="email"
        onChange={handleSignUp}
        value={user.email}
        
        />

        </label>
        

        <label htmlFor=" password">
          password
        <input 
        type="password" 
        name="password" 
        id="password"
        onChange={handleSignUp}
        value={user.password}
        
        />
      </label>


        <label htmlFor="matchpassword">
          enter password again
        <input 
        type="password" 
        name="passwordmatch" 
        id="matchpassword"
        onChange={handleSignUp}
        value={user.passwordmatch}
        
        />
      </label>       


        <label htmlFor="profileimage ">
          Select Profile Image
        <input 
        type="file" 
        name="Profile Image"
        id="profileimage" 
        onChange={handleImageSubmit}
        accept='image/png, image/jpeg'
        maxLength='1'
        />

        <button type="submit" className="notvisible" onClick={handleImageSubmit}>Submit</button>
      </label>
      <button type="submit"
        onClick={handleSubmit}
      >
         Submit
      </button>


      {/* <label htmlFor="">
        <input 
        type="" 
        name="" 
        />
        </label> */}
        </form>

      </section>  
    </div>
  )
}

export default Signup;