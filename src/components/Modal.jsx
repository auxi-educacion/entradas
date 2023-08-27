import { useState,useEffect } from 'react'

import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'


const Modal = ({setModal, 
   animarModal, 
   setAnimarModal, 
   guardarGasto, 
   gastoEditar}) => {

   const [mensaje, setMensaje]=useState('')
   const [nombre, setNombre]=useState('')
   const [cantidad, setCantidad]=useState('')
   const [categoria, setCategoria]=useState('')
   
   useEffect(()=>{
      Object.keys(gastoEditar).length > 0 &&
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)},[gastoEditar])

   useEffect(()=>{ setMensaje('')},[nombre, cantidad, categoria])

   const ocultarModal = ()=>{
      setAnimarModal(false)
      setTimeout(()=>{setModal(false)},500);}

   const handleSubmit = e => {
      e.preventDefault();

      if([nombre, cantidad, categoria].includes("")){
         setMensaje('Todos los campos son obligarios')
         return}

      guardarGasto({nombre, cantidad, categoria})}

  return (
    <div className="modal">
      <div className="cerrar-modal">
         <img 
            src={CerrarBtn} 
            alt='cerrar modal' 
            onClick={ocultarModal} /></div>
      
      <form onSubmit={handleSubmit} 
         className={`formulario ${animarModal ? "animar":'cerrar'}`}>
         
         <legend>{gastoEditar.nombre > 0 ? 'Editar Gasto':'Nuevo Gasto'}</legend>

         {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

         <div className='campo'>
            <label htmlFor='nombre'>Nombre Gasto</label>
               
            <input 
               id='nombre'
               type='text'
               placeholder='Añadir los gastos'
               value={nombre}
               onChange={e=>setNombre(e.target.value)}/></div>

         <div className='campo'>
            <label htmlFor='cantidad'>Cantidad</label>

            <input 
               id='cantidad'
               type='number'
               placeholder='Añade la cantidad de gastos Ej.300'
               value={cantidad}
               onChange={ e =>setCantidad(e.target.value)}/>
         </div>

         <div className='campo'>
            <label htmlFor='categoria'>Categoria</label>

            <select id='categoria'
               value={categoria}
               onChange={ e =>setCategoria(e.target.value)}>

               <option value=''>-- Seleccione --</option>
               <option value='comida'>Comida</option>
               <option value='casa'>Casa</option>
               <option value='gastos'>Varios</option>
               <option value='ocio'>Ocio</option>
               <option value='salud'>Salud</option>
               <option value='suscripciones'>Suscripciones</option>
                  </select></div>

         <input type='submit' value=
            {gastoEditar.nombre > 0 ?
               'Guardar Cambios':'Escribir Gasto'}/>
                  </form></div>)}

export default Modal
