import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ReadById() {
  const { id } = useParams()

  const [item, setItem] = useState({})

  async function carregarDadosApi() {
    const apiUrl = `https://rickandmortyapi.com/api/character/${id}`

    const response = await fetch(apiUrl)

    const body = await response.json()

    setItem(body)

    console.log(body)

    // TODO: Implementar o carregamento da API
    // TODO: Guardar a informação recebida da API em um estado
  }

  useEffect(function () {
    carregarDadosApi()
  }, [])

  // TODO: Exibir essas informações no JSX

  // return <div>ReadById: {id} - {item.name}</div>

  return (
    <div className="image-wrapper">
      <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez" className="character-image" />
      <div className="character-info">
        <div className="status-tag">Alive</div>
        <h2 className="character-name">Rick Sanchez</h2>
        <div className="character-details">
          <div className="detail-item">
            <span className="detail-title">Species</span>
            <span className="detail">Human</span>
          </div>
          <div className="detail-item">
            <span className="detail-title">Gender</span>
            <span className="detail">Male</span>
          </div>
          <div className="detail-item">
            <span className="detail-title">Origin</span>
            <span className="detail">Earth (C-137)</span>
          </div>
          <div className="detail-item">
            <span className="detail-title">Location</span>
            <span className="detail">Citadel of Ricks</span>
          </div>
        </div>
      </div>
    </div>
  )
}
