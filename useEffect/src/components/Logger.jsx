import React, { useEffect, useState } from 'react'

const Logger = () => {
    const [count, setCount] = useState(0)

    function handlecount () {
        setCount(count + 1)
    }

    //runs on every render
    useEffect(() => {
        console.log("your count is: ", {count})
    })


  return (
    <div>
        <button onClick={handlecount}>
            increment
        </button>
        <br/>

        count is : {count}
    </div>
  )
}

export default Logger