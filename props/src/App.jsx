import React from 'react'
import Button from './components/Button'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  function handleClick () {
    setCount(count + 1)
  }


  return (
    <div>
      {/* <Card name="humaima">
      <h1>hi my name</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      </Card>    */}
      {/* elements inside a card tag called children */}

      <Button click={handleClick} text="click me">
        <h1>{count}</h1>
      </Button>
    </div>
  )
}

export default App