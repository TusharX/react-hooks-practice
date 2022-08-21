import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {

  // const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [ id, setId ] = useState(1);
  const [ idFromButtonClick, idFromButtonClickSet] = useState(1);

  // useEffect(() => {
  //   (async()=>{
  //     let posts = await axios.get("https://jsonplaceholder.typicode.com/posts");

  //     setPosts(posts.data);
  //   })();

  // }, []);

  useEffect(() => {
    (async()=>{
      let post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`);
      setPost(post.data);
    })();
  }, [idFromButtonClick]);

  const clickHandler = () => {
    idFromButtonClickSet(id);
  }

  return (
    <div>
      <input name="id" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={clickHandler}>Submit</button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map(post => (
          <li>{post.title}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default DataFetching;