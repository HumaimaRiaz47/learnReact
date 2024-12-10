import React, { createContext, useContext, useState } from 'react'
import ChildA from './components/ChildA'
import './App.css'

 const UserContext = createContext()

//HOW TO USE useContext()
//create context
//export context
//wrap all the child inside a provider
//pass the value
//consume inside the consumer

//1-create context 
const themeContext = createContext()

const App = () => {
   const [user, setUser] = useState({name: "humaima"})
  const [theme, setTheme] = useState("light")
  return (
    <>
    <UserContext.Provider value={user}>
    <themeContext.Provider value={{theme, setTheme}}>
      <div id="container" style={{backgroundColor: theme === "light" ? "beige" : "black"}}>
      <ChildA/>

      </div>
    </themeContext.Provider>

    </UserContext.Provider>
    
      {/* <UserContext.Provider value={user}>
      <ChildA/>
      </UserContext.Provider> */}
    </>
  )
}

export default App
 export {UserContext}
//2-export context
export{themeContext}