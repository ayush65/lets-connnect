import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import InputOptions from '../InputOptions/InputOptions';
import Avatar from '@mui/material/Avatar';
import "./Posts.css"

function Posts({ name , description , message }) {
  return (
    <div  className="post">
            <div className="post__headr">
                    <Avatar />
                    <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>

                    </div>
                    </div>

    <div className="post_body">

        <p>{message}</p>
    </div>

    <div className="post__buttons">

        <InputOptions  Icon={ThumbUpIcon} color="gray"  title="Like"   />
        <InputOptions  Icon={ChatIcon} color="gray"  title="Comment"   />
        <InputOptions  Icon={ShareIcon} color="gray"  title="Send"   />
        <InputOptions  Icon={SendIcon} color="gray"  title="Share"   />
    </div>
                              
    </div>
  )
}

export default Posts