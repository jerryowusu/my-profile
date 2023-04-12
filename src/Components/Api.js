import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Api = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    axios 
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((result) => {
        console.log(result.data)
        setPosts(result.data)
      })
      .catch((error) => console.log(error));
  }, [])




  return (
    <div>
      <p className="advice">{posts.body}</p>
    </div>
  )
}

export default Api;