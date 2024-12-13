import React from 'react'
import './App.css'
import { useState } from 'react'
import { useMemo } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  function expensiveTask(num){
    console.log('inside expensive task')
    for(let i=0; i<=1000000000; i++){}
      return num * 2
    
  }

  let doubleVal = useMemo(() => expensiveTask(input), [input])

  return ( 
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>

      <br/>
      <br/>
      <input type='number' value={input} onChange={(e) => setInput(e.target.value)}/>
        <h1>double: {doubleVal}</h1>
    </div>
  )
}

export default App