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

      { isValidPresupuesto ? (
        <ControlPresupuesto
        gastos={gastos}
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        setIsValidPresupuesto = {setIsValidPresupuesto}
      />):(
        <NuevoPresupuesto
          presupuesto = {presupuesto}
          setPresupuesto = {setPresupuesto}
          setIsValidPresupuesto = {setIsValidPresupuesto}
        />
      )}
      
    </header>
  )
}

export default header
