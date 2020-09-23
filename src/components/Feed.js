import React from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import './Feed.css';

function Feed() {
  return (
    <div className="feed">
      {/* Story */}
        <StoryReel />
      {/* Message */}
      <MessageSender />
      <Post 
    //   key={id}
      profilePic="https://www.svgrepo.com/show/81103/avatar.svg"
      message="Wow this works !!!"
      timestamp="The timestamp"
      username="Clement"
      image="https://images.alphacoders.com/105/105531.jpg"
      />
      <Post 
      profilePic="https://www.svgrepo.com/show/81103/avatar.svg"
      message="Wow this works !!!"
      timestamp="The timestamp"
      username="Loic"
      image="https://images8.alphacoders.com/105/1054256.jpg"
      />
      <Post 
      profilePic="https://www.svgrepo.com/show/81103/avatar.svg"
      message="Wow this works !!!"
      timestamp="The timestamp"
      username="Arthur"
      image="https://images4.alphacoders.com/100/1001310.jpg"
      />
    </div>
  );
}

export default Feed;
