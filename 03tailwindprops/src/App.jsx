import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName: "Yash Soni",
    age: 21
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded mb-4'>Tailwind Test</h1>
      <Card username="Yash Soni" />
      <Card username="Abhinav Singh" btntext='Click to view' />

    </>
  )
}

export default App
