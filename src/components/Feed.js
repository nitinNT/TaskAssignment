import React , {useState,useEffect} from 'react';
import '../App.css';
import Post from './Post'

import firebaseApp from '../firebase';

export default function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        
        firebaseApp.firestore().collection('posts').onSnapshot(snapshot=>{
                setPosts(snapshot.docs.map(doc=>doc.data()))
                
            }
        )
    })
    return (
        <div className="feed">
            <div className="feed_header">
                <h2>Home</h2>
            </div>

            {posts.map(post=>(
                <Post
                username={post.username}
                text={post.text}
                image={post.image}
                avatar={post.avatar}/>
    
            ))}             

            
        </div>
    )
}
