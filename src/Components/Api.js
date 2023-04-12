import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Api = () => {
  const [posts, setPosts] = useState({});
  
  useEffect(() => {
    axios 
      .get("https://api.adviceslip.com/advice")
      .then((result) => {
        console.log(result)
        setPosts(result)
      })
      .catch((error) => console.log(error));
  }, [])




  return (
    <div>
      <h1>hello</h1>
      {posts.data.slip.advice}
      {/* {
        posts.map((post) => (
          <div className="advice" key={post.id} >
            <p>{post.slip.advice}</p>
          </div>
        ))
      } */}
    </div>
  )
}

export default Api;