import React from 'react'
import '../App.css';

import {Avatar} from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";


function Post({username, text , image , avatar}) {
    return (
    <div className="post">
    <div className="post_avatar">
      <Avatar src={avatar} />
    </div>
    <div className="post_body">
      <div className="post_header">
        <div className="post_headertext">
          <h3>
            <span className="post_headerdspecial">
              @{username}
            </span>
          </h3>
        </div>
        <div className="post__headerdescription">
          <p>{text}</p>
        </div>
        <img className="postImage" src={image} alt="loading" />
      </div>
      <div className="post_footer">
        <ChatBubbleOutlineIcon fontSize="small" />
        <RepeatIcon fontSize="small" />
        <FavoriteBorderIcon fontSize="small" />
        <PublishIcon fontSize="small" />
      </div>
      
    </div>
  </div>)
    
}

export default Post;
