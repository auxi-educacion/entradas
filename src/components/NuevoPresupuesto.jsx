import Mensaje from "./Mensaje";
import { useEffect, useState } from "react";

const NuevoPresupuesto = ({presupuesto,setPresupuesto, setIsValidPresupuesto}) => {
  const [mensaje,setMensaje]=useState('')
  useEffect(()=>{setMensaje('')},[presupuesto])

  const handlePresupuesto = (e) => {
    e.preventDefault();
      if(!presupuesto|| presupuesto <= 0){
        setMensaje('No es un presupuesto valido')
        return
      } setIsValidPresupuesto(true)
  }
  return (
    <div className="contenedor-presupuesto sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="Number"
            placeholder="Anhade tu presupuesto"
            value={presupuesto}
            onChange={e=> setPresupuesto(Number(e.target.value))}/></div>

          {/* aqui esta el boton */}
        <input type="submit" value="Anhadir"/>
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}</form></div>)}

export default NuevoPresupuesto
