import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const header = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
  gastos}) => {
  return (
    <header>
      <h1> Planificador de Gastos</h1>

      { isValidPresupuesto ? (<ControlPresupuesto presupuesto={presupuesto}/>):(
      <NuevoPresupuesto
        gastos={gastos}
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        setIsValidPresupuesto = {setIsValidPresupuesto}
      />
      )}
      
    </header>
  )
}

export default header
