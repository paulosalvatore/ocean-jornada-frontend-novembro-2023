import './App.css'
import Card from './components/Card/Card';

function App() {
  return (
    <>
      <div className="card">
        <h2>Rick Sanchez</h2>
        <div className="tags">
          <div className="tag">Status: Vivo</div>
          <div className="tag">Espécie: Humana</div>
          <div className="tag">Origem: Terra C-137</div>
        </div>
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
      </div>
      <br />
      <Card />
    </>
  )
}

export default App;
