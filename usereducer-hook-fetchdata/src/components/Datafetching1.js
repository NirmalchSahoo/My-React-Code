import React, { useEffect, useState } from 'react';
import axios from 'axios';
const DataFetching1 = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/2')
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError('');
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setError('Something went wrong');
      });
  }, []);
  return (
    <div>
      {loading ? 'loading' : post.title}
      {error ? error : null}
    </div>
  );
};

export default DataFetching1;
