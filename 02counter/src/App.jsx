import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  const addValue = () => {
    if (counter >= 20) {
      alert("Cannot go above 20");
      return;
    }
    setCounter(counter + 1);
    console.log(counter);
  }

  const removeValue = () => {
    if (counter === 0) {
      alert("cannot go below 0");
      return;
    }
    setCounter(counter - 1);
    console.log(counter);
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>

      <p>Footer: {counter}</p>
    </>
  )
}

export default App
