import { useState } from 'react'
import './App.css'
import BotonMultiuso from './components/BotonMultiuso'
import DivChildren from './components/DivChildren'
import Tarjeta from "./components/Tarjeta"
import NavBar from './components/NavBar'  

function App() {

  const saludo = () => {
    alert("¡Hola, Mundo!")
  }

  return (
    <>
    <NavBar></NavBar>
      <BotonMultiuso color={"green"} padding={"1rem"} onClick ={saludo} children={"saludo"}></BotonMultiuso>
      <DivChildren direction={"row"} justify={"center"} gap={"1rem"} padding={"0.5rem"} color={"green"}/>
      <Tarjeta backgroundColor={"green"} titulo={"Kit 3 en 1"} descripcion={"cuenta con amoladora, rotomartillo y reflector"} children={"Precio $500.000"}></Tarjeta>
      <Tarjeta backgroundColor={"red"} titulo={"Kit 4 en 1"} descripcion={"cuenta con amoladora, rotomartillo y reflector"} children={"Precio $500.000"}></Tarjeta>
      <Tarjeta backgroundColor={"yellow"} titulo={"Taladro percutor"} descripcion={"cuenta con amoladora, rotomartillo y reflector"} children={"Precio $500.000"}></Tarjeta>
     </> 
  )
}

export default App
