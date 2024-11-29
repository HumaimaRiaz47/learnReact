import React from 'react'
import UserCard from './components/UserCard'
import './App.css'
import image from "./assets/image.jpg"
import ny from "./assets/ny.jpg"
import london from './assets/london.jpeg'


const App = () => {
  return (
    <div className='containerw'>
      <UserCard name="paris" des="desc1" img={image}/>
      <UserCard name="new york" des="desc2" img={ny}/>
      <UserCard name="london" des="desc3" img={london}/>
    </div>
  )
}

export default App
