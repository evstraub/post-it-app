import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'

import {auth} from '../firebase'



const logIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth,provider)
}
const SignIn = () => {
  return (
    <button onClick={logIn}>SignIn</button>
  )
}

export default SignIn