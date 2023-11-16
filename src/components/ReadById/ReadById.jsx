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
  }

  useEffect(function () {
    carregarDadosApi()
  }, [])

  // TODO: Exibir essas informações no JSX

  // return <div>ReadById: {id} - {item.name}</div>

  return (
    <div className="main">
      <div className="image-wrapper">
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Imagem do Personagem" />
      </div>

      <div className="info">
        <div className="info-tag">Status: Alive</div>

        <div className="info-title">Rick Sanchez</div>

        <div className="info-row">
          <div className="info-label">Species:</div>
          <div className="info-text">Human</div>
        </div>

        <div className="info-row">
          <div className="info-label">Gender:</div>
          <div className="info-text">Male</div>
        </div>

        <div className="info-row">
          <div className="info-label">Origin:</div>
          <div className="info-text">Earth (C-137)</div>
        </div>

        <div className="info-row">
          <div className="info-label">Location:</div>
          <div className="info-text">Citadel of Ricks</div>
        </div>
      </div>
    </div>
  )
}
