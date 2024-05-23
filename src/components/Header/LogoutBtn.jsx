import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const logoutHandler = () => {
        authService.logout().then(() => {
          Navigate("/login");
            dispatch(logout())
        })
    }
  return (
    <button
    className='font-bold text-color-1 inline-bock px-6 py-2 duration-200 hover:bg-color-2 hover:text-color-3 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn