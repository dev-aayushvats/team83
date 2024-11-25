import { useState } from 'react'
import './App.css'
import FrostedBackground from './components/FrostedBackground'
import CenteredText from './components/CenteredText'

function App() {

  return (
    <>
      <FrostedBackground>
        <CenteredText />
      </FrostedBackground>
    </>
  )
}

export default App
