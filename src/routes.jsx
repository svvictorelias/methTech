import React from 'react'
import { Routes, Route, useNavigate} from 'react-router-dom'
import AulaCard from './components/AulaCard'
import AulasJson from './data/aulas.json'

export default function MainRoutes() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/teste'
    navigate(path)
  }
  return (
    <Routes>
      <Route
        path="teste"
        element={AulasJson.aulas.map(aula => (
          <AulaCard
            key={aula.id}
            titulo={aula.titulo}
            capa={aula.capa}
            techs={aula.techs}
            urlVideo={aula.url}
          />
        ))}
      />
      <Route path='/' element={<h1 onClick={routeChange}>Clique aqui para ver os videos</h1>}/>
    </Routes>
  )
}
