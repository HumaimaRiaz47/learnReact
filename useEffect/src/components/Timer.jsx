import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0)

    //run on first render only and clean up when componenet is unmount or remove from ui.
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("interval executed")
            setSeconds(prevSeconds => prevSeconds + 1)
        }, 1000)

        return () =>{
            clearInterval(interval)
        }
    }, []) 
  return (
    <div>
        
        second is: {seconds}
        
        
        </div>
  )
}

export default Timer