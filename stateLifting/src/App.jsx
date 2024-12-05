import React from 'react'
import Card from './componets/Card'
import { useState } from 'react'

const App = () => {
  const [name, setName] = useState()

  return (
    <div>
      <Card title="card 1" name={name} setName={setName}/>
      <Card title="card 2" name={name} setName={setName}/>

      <p>in parent value is:  {name} </p>
    </div>
  )
}

export default App