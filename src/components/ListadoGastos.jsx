import Gasto from "./Gasto"

const ListadoGastos = ({gastos}) => {
  return (
   <div className="Listado-gastos contenedor">
      <h2>{ gastos.length ? 'gastos' : 'no hay gastos' }</h2>
     
      
      {(gastos.map (gasto => ( 
            <Gasto key={gasto.id}
            gasto={gasto}/>
         ))}


   </div>
  )
}

export default ListadoGastos
