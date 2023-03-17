import React from 'react'
import "./Widget.css"
import SearchIcon from '@mui/icons-material/Search';
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";


const Widget = () => {
  return (
    <div className='widgets'>
      <div className="widgets__input">
        <SearchIcon className='widgets__searchIcon' />
        <input type="text" placeholder='Search twitter' />
      </div>

      <div className="widgets__widgetContainer">
        <h2>what's happening</h2>

        <TwitterTweetEmbed tweetId={"1634559388370235392"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Cristiano"
          options={{ height: 400 }}
        />
      </div>
    </div>

  )
}

export default Widget