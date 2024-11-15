import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Component/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    </>
  )
}

export default App
