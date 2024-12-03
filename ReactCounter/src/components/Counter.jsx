import React from 'react'
import './Counter.css'
import { useState } from 'react'

const Counter = () => {
  const[count, setCount] = useState(0)
  return (
    <div className='main'>
        <h2>counter</h2>
        <p>count starts from {count}</p>
        <button onClick={() => {setCount(count + 1)}}>click me</button>
    </div>
  )
}

export default Counter