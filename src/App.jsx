import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/Button'
import { WapperList } from './components/WrapperList'
import { List } from './components/List'
function App() {

  const buttonText = "Count :";

  return (
  <>
      <h1>HOLA DESDE VITE</h1>
     <Button text={buttonText}/>
    <WapperList>
      <List/>
    </WapperList>
  </>
  )
}

export default App
