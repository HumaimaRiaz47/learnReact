import React, { useEffect, useState } from 'react'

const Resize = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    //run on first render only

    useEffect(()=>{

        const handlewidth = () => {setWindowWidth(window.innerWidth)}
        window.addEventListener("resize", handlewidth)
        console.log("add event listener")

        return() => {
            window.removeEventListener("resize", handlewidth)
            console.log("remove event listener")
        }
          

        
    },[])


  return (
    <div>
        <h1>window width is: {windowWidth}</h1>
    </div>
  )
}

export default Resize