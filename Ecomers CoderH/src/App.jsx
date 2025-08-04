import { useState } from 'react'
import BotonMultiuso from './components/BotonMultiuso'
import DivChildren from './components/DivChildren'

function App() {

  const saludo = () => {
    alert("¡Hola, Mundo!")
  }

  return (
    <>
      <BotonMultiuso color={"green"} padding={"1rem"} onClick ={saludo} children={"saludo"}></BotonMultiuso>
      <DivChildren direction={"row"} justify={"center"} gap={"1rem"} padding={"0.5rem"} color={"green"}/>
     </> 
  )
}

export default App
