import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import {Avatar, IconButton} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import SidebarChat from './SidebarChat';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, {auth} from './firebase'

function Sidebar() {
    const user= useSelector(selectUser);
    const[chats, setChats]= useState([]);


    const addChat=()=>{
        const chatName= prompt("Enter a channel name");
        if(chatName){
            db.collection('chats').add({
                chatName: chatName,
            })
        }
        
    }

    useEffect(()=>{
        db.collection('chats').onSnapshot((snapshot)=>(
            setChats(snapshot.docs.map((doc)=>({
                id: doc.id,
                data: doc.data(),
            })))
        ))
    },[])

    return (
        <div className="sidebar">

            {/* header code */}
           <div className="sidebar__header">
            <Avatar onClick={()=>auth.signOut()} className="sidebar__avatar" src={user.photo}/>

                <div className="sidebar__input">
                    <SearchIcon/>
                    <input placeholder="Search"/>
                </div>

            <IconButton variant="outlined" className="sidebar__inputButton">
                <RateReviewOutlinedIcon onClick={addChat}/>
            </IconButton>
           </div>

            {/* Chat code */}
           <div className="sidebar__chats">
               {chats.map(({id, data:{chatName}})=>(
                   <SidebarChat key={id} id={id} chatName={chatName}/>
               ))}
            
           
        
           </div>

        </div>
    )
}

export default Sidebar
