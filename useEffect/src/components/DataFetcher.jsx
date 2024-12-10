import React, { useEffect } from "react";

const DataFetcher = () => {
  const [data, setData] = [];
  const [loading, setLoading] = true;

  useEffect(
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        setData(data)
        setLoading(false)}
    )
  )

  return (
    <div>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;