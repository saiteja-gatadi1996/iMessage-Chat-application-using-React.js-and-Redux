import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice'
import "./Message.css"

//ES6 way
const Message=forwardRef(({id, contents:{
    timestamp, message, uid, displayName, email, photo}
}, ref)=>

{
    const user= useSelector(selectUser);
    return (

        //apply to the sender class if user email is the email
        <div ref={ref} className={`message ${user.email===email && "message__sender"}`}>
            <Avatar className="message__photo" src={photo}/>
            <p>{message}</p>
            
            {/* pass it to a date and format to protect from optional training */}
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    )
}

// below closing for forwardRef
)

export default Message
