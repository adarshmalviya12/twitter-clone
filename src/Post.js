import React, { useEffect, useState } from 'react'
import "./Post.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import { Avatar } from '@mui/material'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import PublishIcon from '@mui/icons-material/Publish';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Post = ({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
}) => {

    return (
        <div className='post'>
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">

                    <div className="post__headerText">
                        <h3>
                            {displayName}<span>
                                <span className="post__headerSpecial">
                                    {verified && <VerifiedIcon className='post__badge' />} @{userName}</span>
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>
                            {text}
                        </p>
                    </div>

                </div>
                <img src={image} alt="loading...."/>
                <div className="post__footer">
                    <ChatBubbleIcon fontSize='small' />
                    <RepeatIcon fontSize='small' />
                    <FavoriteBorderIcon fontSize='small' />
                    <PublishIcon fontSize='small' />
                </div>
            </div>
        </div>
    )
}

export default Post