import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetchingById = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  useEffect(() => {
    axios
      //   .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromButtonClick]);
  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  return (
    <div>
      <h1> Post By Id</h1>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetech Data
      </button>
      <div>{post.title}</div>
      {/* <ul>
        {post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default DataFetchingById;
