import './App.css'
import AulaCard from './components/AulaCard'
import AulasJson from './data/aulas.json'

function App() {
  return (
    <div className="App">
      {AulasJson.aulas.map(aula => (
        <AulaCard
          key={aula.id}
          titulo={aula.titulo}
          capa={aula.capa}
          techs={aula.techs}
          urlVideo={aula.url}
        />
      ))}
    </div>
  )
}

export default App
