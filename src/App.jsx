import { useContext, useState } from 'react'
import HomePage from './components/HomePage'
import { ThemeContext } from './context/ThemeContext'
import './App.css'
import MoonIcon from './components/MoonIcon'

function App() {
  const{theme}= useContext(ThemeContext)

  return (
    
<div className={theme === 'light' ? 'bg-c-white' : 'bg-m-dark'}>

  
  <MoonIcon/>
  <HomePage/>
</div>
    
  )
}

export default App
