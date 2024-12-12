import React, { useState } from "react";
import { store } from "../src/redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { decrement, increaseByAmount, increment, reset } from "./features/counter/counterSlice";
import './App.css'

const App = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleincrement() {
    dispatch(increment());
  }

  function handledecrement() {
    dispatch(decrement());
  }

  function handlereset() {
    dispatch(reset());
  }

  function handleincbyamount(){
    dispatch(increaseByAmount(amount))
  }

  return (
    <div className="container">
      <button onClick={handleincrement}>+</button>
      <p>count:{count} </p>
      <button onClick={handledecrement}>-</button>
      <br />
      <button onClick={handlereset}>reset</button>
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="enter the amount"
      />
      <br/>
      <button onClick={handleincbyamount}>inc. by amount</button>
    </div>
  );
};

export default App;
