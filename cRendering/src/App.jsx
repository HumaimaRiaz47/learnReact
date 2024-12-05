import React from 'react'
import LoginBtn from './componetns/LoginBtn'
import { useState } from 'react'
import LogoutBtn from './componetns/LogoutBtn'

const App = () => {
  const [isloggedin, setIsloggedin] = useState(true)


  return(
    <div>
      {isloggedin ? <LogoutBtn/> : <LogoutBtn/>}
    </div>
  )
 
      // if(isloggedin){
      //   return (
      //     <LogoutBtn/>
      //   )
      // }else{
      //   return (
      //     <LoginBtn/>
      //   )
      // }

  
  
}

export default App