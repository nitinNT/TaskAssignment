import React from 'react'

import '../App.css';
import Feed from './Feed';
import TwitterIcon from '@material-ui/icons/Twitter';
function Home() {
  

    return (
        <div className="App">
          <div className="sidebar">
            <TwitterIcon className="sidebar__twitter_icon"/>
          </div>
          <Feed/>
        </div>  
      
    )
}

export default Home
