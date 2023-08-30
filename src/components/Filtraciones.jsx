
const Filtraciones = ({filtraciones, setFiltraciones}) => {
  return (
    <div className="filtros sombra contenedor">
      <div className='campo'>
         <label htmlFor='filtro'>Filtrar Gastos</label>

         <select id='filtro'
            value={filtraciones}
            onChange={e => setFiltraciones(e.target.value)} >
               <option value=''>-- Todas las Categorias --</option>
               <option value='comida'>Comida</option>
               <option value='casa'>Casa</option>
               <option value='gastos'>Varios</option>
               <option value='ocio'>Ocio</option>
               <option value='salud'>Salud</option>
               <option value='suscripciones'>Suscripciones</option>
         </select>
      </div>
    </div>
  )
}

export default Filtraciones
