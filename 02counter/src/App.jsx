import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(50)

 // let counter = 5

  const addvalue = () => {
    setCounter(counter + 5)
  }

  const decrese = () => {
    setCounter(counter - 5)
  }
 
  return (
    <>
    <h1>kanchieeeeeeeeeeeeeee</h1>
    <h2>counter value: {counter} </h2>

    <button onClick={addvalue}>add value</button>
    <br/>
    <button onClick={decrese}>decrease value</button>
    </>
  )
}

export default App
