import React, { useEffect, useState } from "react";
import Logger from './components/Logger.jsx'

const App = () => {

  return(
    <div>
      <Logger/>
    </div>
  )
  // const [count, setCount] = useState(0)

  //first ----> side effect function
  //second ----> clean-up function
  //third -----> comma sep dependency list

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  //variation: 1
  //runs on every render
  
  //   useEffect(() => {
  //     alert("i run on every render")
  //   })

  //   function handleCount(){
  //     setCount(count + 1)
  //   }

  // return (
  //   <div>
  //     <button onClick={handleCount}>
  //       click me
  //     </button>
  //     <br/>
  //     count is: {count}
  //   </div>
  // )

  //   //variation2 : run on only 1st render
  //   useEffect(() => {
  //     alert("i run only on 1st render")
  //   }, [])

  //variation4
  //multiple dependencies

  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

  // function handlecount() {
  //   setCount(count + 1);
  // }

  // function handletotal() {
  //   setTotal(total + 1);
  // }

  // useEffect(() => {
  //   alert("run when both the dependencies get updated");
  // }, [count, total]);

  // return (
  //   <div>
  //     <button onClick={handlecount}>count</button>
  //     <br />
  //     count is: {count}
  //     <br />
  //     <button onClick={handletotal}>total</button>
  //     <br />
  //     total : {total}
  //   </div>
  // );


  //variation: 5
//create clean-up function

// const [count, setCount] = useState(0);
//   const [total, setTotal] = useState(1);

//   function handlecount() {
//     setCount(count + 1);
//   }

//   function handletotal() {
//     setTotal(total + 1);
//   }

//   useEffect(() => {
//     alert("run when both the dependencies get updated");

//     return () => {
//       alert("count is unmounted")  //clean-up function
//     }
//   }, [count]);

//   return (
//     <div>
//       <button onClick={handlecount}>count</button>
//       <br />
//       count is: {count}
//       <br />
//       <button onClick={handletotal}>total</button>
//       <br />
//       total : {total}
//     </div>
//   );



};

export default App;
// useEffect is called after the component mounts: It does not run before mounting.
// It runs after every render: If you do not provide a dependency array, it will run after every render.
// It can run only once: If you provide an empty dependency array, it will run only once after the initial mount.
// Cleanup: The cleanup function runs before the effect is re-executed or when the component unmounts.
// This behavior allows you to manage side effects effectively in your React components, ensuring that they run at the appropriate times in the component lifecycle.
