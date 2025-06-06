import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer'
import Content from './components/content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Content/>
      <Footer/>
    </>
  )
}

export default App
