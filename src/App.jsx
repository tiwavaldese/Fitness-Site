import { useContext, useState } from 'react'
import HomePage from './components/HomePage'
import { ThemeContext } from './context/ThemeContext'
import './App.css'

function App() {
  const{theme}= useContext(ThemeContext)

  return (
    
<div>
  <HomePage/>
</div>
    
  )
}

export default App
