import React from 'react';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './MessageSender.css';

function MessageSender() {

    const handleSubmit = e => {
        e.preventDefault();
    };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
            <input 
                className="messageSender__input"
                placeholder={`Que voulez-vous dire, Clement ?`}
                type="text" />


            <input placeholder="Image URL (Option)" />

            <button onClick={handleSubmit} type="submit">
                Publier
            </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
            <VideocamIcon style={{ color: "red" }} />
            <h3>Direct</h3>
        </div>
        <div className="messageSender__option">
            <PhotoLibraryIcon style={{ color: "green" }} />
            <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
            <InsertEmoticonIcon style={{ color: "orange" }} />
            <h3>Humeur/Activité</h3>
        </div>
      </div>
    </div>

  );
}

export default MessageSender;
