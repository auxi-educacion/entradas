import Gasto from "./Gasto"

const ListadoGastos = ({gastos,setGastoEditar}) => {
  return (
   <div className="Listado-gastos contenedor">
      <h2>{ gastos.length ? 'Todos los gastos' : 'No existe gasto alguno' }</h2>
     
      
      {(gastos.map (gasto => ( 
        <Gasto 
          key={gasto.id}
          gasto={gasto}
          setGastoEditar={setGastoEditar}/>)))}</div>)}

export default ListadoGastos
