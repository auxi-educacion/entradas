import Gasto from "./Gasto"

const ListadoGastos = ({
  gastos, 
  setGastoEditar, 
  eliminarGasto,
  filtraciones,
  gastosFiltrados
  }) => {
  return (
   <div className="Listado-gastos contenedor">
     
      {filtraciones ? (
          <>
            <h2>{ gastos.length ? 'Gastos' : 'No hay gastos en esta categoria' }</h2>
            {gastosFiltrados.map(gasto => ( 
            <Gasto 
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}/>))}
          </>
        
        ):(
          <>
            <h2>{ gastos.length ? 'Todos los gastos' : 'No existe gasto alguno' }</h2>
            {gastos.map (gasto => ( 
              <Gasto 
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}/>
            ))}
          </>)}
   </div>)

            }

export default ListadoGastos
