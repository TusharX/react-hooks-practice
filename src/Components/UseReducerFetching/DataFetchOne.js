import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchOne() {

  const [ loading, setLoading ] = useState(true);
  const [ post, setPost ] = useState({});
  const [ error, setError ] = useState("");

  useEffect(() => {

    (async()=>{

      try {
        
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        setLoading(false);
        setPost(response.data);
        setError("");

      } catch(err){

        setLoading(false);
        setPost({});
        setError("Something went wrong!");

      }

    })();

  }, []);

  return (
    <div>
      { loading ? "Loading..." : post.title }
      { error ? error : null }
    </div>
  )
}

export default DataFetchOne;