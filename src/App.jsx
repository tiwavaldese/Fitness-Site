import { useContext, useState } from 'react'
import HomePage from './components/HomePage'
import { ThemeContext } from './context/ThemeContext'
import './App.css'
import MoonIcon from './components/MoonIcon'

function App() {
  const{theme}= useContext(ThemeContext)

  return (
    
<div>
  <MoonIcon/>
  <HomePage/>
</div>
    
  )
}

export default App
