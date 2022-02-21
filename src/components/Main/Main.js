// 1. Importaciones
import Campus from "./Campus"
import ListCampus from "./ListCampus"

// 2. Función + Exportación
export default function Main() {

  const campuses = [
    'Ciudad de México',
    'Miami',
    'Berlin'
  ]

  const students = [
    {
      name: 'Emmanuel',
      campus: 'Ciudad de México'
    },
    {
      name: 'Gerardo',
      campus: 'Ciudad de México'
    },
    {
      name: 'Joaquín',
      campus: 'Ciudad de México'
    },
  ]

  return (
    <div>
      <Campus location={campuses[0]} />
      <Campus location={campuses[1]} />
      <Campus location={campuses[2]} />

      <ListCampus list={campuses} students={students} />
    </div>
  )
}
