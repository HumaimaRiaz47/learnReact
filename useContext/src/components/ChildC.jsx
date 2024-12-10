import React, { useContext } from 'react'
import {themeContext, UserContext} from '../App'

const ChildC = () => {
     const user = useContext(UserContext)
    const {theme, setTheme} = useContext(themeContext)

    function handleClick(){
        if(theme == 'light')
            setTheme('dark')
        else 
            setTheme('light')
    }
  return (
    <div>
        <button onClick={handleClick}>
            change theme
        </button>
        data: {user.name}
    </div>
    // <div>hello {user.name}</div>

  )
}

export default ChildC