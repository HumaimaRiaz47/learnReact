import React, { useRef } from 'react'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  let val = useRef(0)
  let btnRef = useRef()

  function handleclick() {
    val.current = val.current + 1
    console.log("the value of val persists using useRef", val.current)
    setCount(count + 1)
  }

  function handleChangeColor(){
    btnRef.current.style.backgroundColor = 'red'
  }

  //to verify that useState re renders at every update on ui.

  useEffect(() => {
    console.log("re renders at everytime")
  })

  return (
    <div>
      <p>count:{count}   </p>
      <button ref={btnRef} onClick={handleclick}>increment</button>
      <br/>
      <br/>

      <button onClick={handleChangeColor}>change color of 1st button</button>
    </div>
  )
}

export default App