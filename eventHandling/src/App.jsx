import React from 'react'

const App = () => {

// function handleClick() {
//   alert("hello button is clicked")
// }

function handleinput(e){
  console.log("your value is:", e.target.value)
}

function handleform(){
  alert("your form is submitted!")
}

  return (
    <div>
      
      <form onSubmit={handleform}> 
      <input type="text" onChange={handleinput}/> 
      <button type='submit'>Submit</button>
      </form>

      {/* <button onClick={handleClick}>
        click me
      </button> */}
    </div>
  )
}

export default App