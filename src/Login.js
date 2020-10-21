import React from 'react'
import "./Login.css"
import {auth, provider} from './firebase'
import {Button} from "@material-ui/core"

function Login() {

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .catch((err)=>alert(err.message))
    }

    return (
        <div className="login">
          <div className="login__logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png" alt=""/>
              <h1>iMessage</h1>
          </div>

          <Button onClick={signIn}>Sign in</Button>
        </div>
    )
}

export default Login
