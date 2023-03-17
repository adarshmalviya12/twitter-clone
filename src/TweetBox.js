import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import "./TweetBox.css"
import db from "./firebase"
import { nanoid } from "nanoid"
import { collection, addDoc } from "firebase/firestore";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "posts"), {
        id: nanoid(),
        displayName: "Adarsh Malviya",
        username: "adarsh@12",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:
          "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
      });

      setTweetMessage("");
      setTweetImage("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };


  return (
    <div className='tweetBox'>
      <form   >
        <div className="tweetBox__input">
          <Avatar />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text" placeholder="What's happening?" />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className='tweetBox__imageInput'
          placeholder='Enter image URL'
          type="text"
        />
        <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox