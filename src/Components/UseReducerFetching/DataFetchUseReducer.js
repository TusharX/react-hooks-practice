import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  loading : true,
  post : {},
  error : ""
}

const reducer = (state, action) => {

  switch(action.type){

    case "FETCH_SUCCESS":
      return {
        loading : false,
        post : action.payload,
        error : ""
      }

    case "ERROR":
      return {
        loading : false,
        post : {},
        error : "Something went wrong"
      }
  }
}

function DataFetchUseReducer() {

  const [ state, dispatch ] = useReducer(reducer, initialState);

  useEffect(() => {

    (async() => {

      try {

        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/10");

        dispatch({
          type : "FETCH_SUCCESS",
          payload : response.data
        });

      } catch(err){

        dispatch({
          type : "ERROR"
        });

      }

    })();

  }, []);


  return (
    <div>
      <p>Data fetching useReducer </p>
      { state.loading ? "Loading" : state.post.title }
      {state.error ? state.error : null}
    </div>
  )
}

export default DataFetchUseReducer;