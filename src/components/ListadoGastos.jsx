import Gasto from "./Gasto"

const ListadoGastos = ({gastos}) => {
  return (
   <div className="Listado-gastos contenedor">
      <h2>{ gastos.length ? 'gastos' : 'no hay gastos' }</h2>
     
      
      {(Array.isArray(gastos)) ? (gastos.map (gasto => ( 
            <Gasto key={gasto.id}
            gasto={gasto}/>
         ))) : (console.log("gastos no es un array", console.log(gastos)))}


   </div>
  )
}

export default ListadoGastos
