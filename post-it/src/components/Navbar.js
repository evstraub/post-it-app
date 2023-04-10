import React from 'react'
import {auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from './SignIn'
import LogOut from './LogOut'

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div>Navbar {user ? <LogOut/> : <SignIn/>}
        
    </div>
  )
}

export default Navbar