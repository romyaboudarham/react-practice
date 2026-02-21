import { useState } from 'react'
import './App.css'
import postsData from "./posts.json";
import Post from "./components/Post";
import CreateNewPost from "./components/CreateNewPost";
import { v4 as uuidv4 } from 'uuid'; // Import as v4 for random UUIDs

function App() {
  const [posts, setPosts] = useState(postsData);

  const handlePostSubmit = (text) => {
      const newPost = {
        id: uuidv4(),
        author:"You",
        text: text
      }
      
      // use functional state update ("prev") to avoid stale variable states
      setPosts(prevPosts => [newPost, ...prevPosts]);
  }


  return (
    <>
      <CreateNewPost onPostSubmit={handlePostSubmit}/>
      <div>
        {
          posts.map(post => (
            // remember to pass a KEY to efficiently re-render the list
            <Post key={post.id} name={post.author} text={post.text}/>
          ))
        }
      </div>
    </>
  )
}

export default App
