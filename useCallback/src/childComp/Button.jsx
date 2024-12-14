import React, { useState, useCallback } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // Memoized function to increment the counter
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  // Memoized function to update the message
  const updateMessage = useCallback((newMessage) => {
    setMessage(newMessage);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <br />
      <input
        type="text"
        placeholder="Type a message"
        onChange={(e) => updateMessage(e.target.value)}
      />
      <p>Message: {message}</p>
    </div>
  );
};

export default Counter;
