import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
  return (
    <div class="storyReel">
      {/* Story */}
      <Story
      image="https://pbs.twimg.com/media/DfkhrO1XUAEYkdw?format=jpg&name=small"
      profileSrc="https://www.svgrepo.com/show/63321/avatar.svg"
      title="Clement"
      />
      {/* Story */}
      <Story
      image="https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2018/11/meilleure-banque-image-1024x682.jpg"
      profileSrc="https://www.svgrepo.com/show/63321/avatar.svg"
      title="Loic"
      />
      {/* Story */}
      <Story
      image="https://pixnio.com/free-images/2019/10/12/2019-10-12-17-36-51-1200x819.jpg"
      profileSrc="https://www.svgrepo.com/show/63321/avatar.svg"
      title="Clement"
      />
      {/* Story */}
      <Story
      image="https://pixnio.com/free-images/2019/09/13/2019-09-13-10-09-54-1200x800.jpg"
      profileSrc="https://www.svgrepo.com/show/63321/avatar.svg"
      title="Loic"
      />
      {/* Story */}
      <Story
      image="https://pixnio.com/free-images/2019/09/13/2019-09-13-10-35-24-1200x800.jpg"
      profileSrc="https://www.svgrepo.com/show/63321/avatar.svg"
      title="Clement"
      />
    </div>
  );
}

export default StoryReel;
