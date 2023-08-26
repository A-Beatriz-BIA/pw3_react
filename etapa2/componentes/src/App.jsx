import { useState } from 'react'
import primeiroComponente from './components/primeiroComponente'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2/>Home Principal<h2/>
      <primeiroComponente/>
    </>
  )
}

export default App
