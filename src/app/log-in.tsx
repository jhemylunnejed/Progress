"use client"

import React, { useState } from 'react'

import {logIn, logOut, toggleModerator} from "@/redux/features/auth-slice"

import {useAppDispatch } from '@/redux/store'
import {useDispatch} from 'react-redux'

const Login = () => {

    const [username, setUsername] = useState("")

    const dispatch = useAppDispatch()

    const onClickLogin = () => {
      dispatch(logIn(username))
    }
    const onClickToggle = () => {
      dispatch(toggleModerator())

    }
    const onClickLogOut = () => {
      dispatch(logOut())
    }

  return (
    <div>
        <input className='border' type='text' onChange={(e)=> setUsername(e.target.value)}/>
        <br/>
        <button onClick={onClickLogin}>Log In</button>
        <br/>
        <button onClick={onClickLogOut}>Log out</button>
        <br/>

        <button onClick={onClickToggle}>Toggle Moderator Status</button>
    </div>
  )
}

export default Login