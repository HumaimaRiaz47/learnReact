import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  function handleclick(){
    navigate('about')
  }
  return (
    <div>Home
<br/>
      <button onClick={handleclick}>move to about</button>
    </div>
  )
}

export default Home