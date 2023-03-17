import React, { useEffect, useState } from 'react'
import "./Feed.css"
import Post from './Post'
import TweetBox from './TweetBox'
import { collection, onSnapshot } from "firebase/firestore";
import db from './firebase';

const Feed = () => {

    const [postData, setPostData] = useState([]);
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) =>
            setPostData(snapshot.docs.map((doc) => doc.data()))
        );
        return ()=> unsubscribe();
    }, []);

    return (
        <div className='feed'>
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            <TweetBox />

            {
                postData.map((post) => (
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        userName={post.userName}
                        varified={post.varified}
                        text={post.text}
                        avatar=""
                        image={post.image} />
                ))
            }

        </div>
    )
}

export default Feed