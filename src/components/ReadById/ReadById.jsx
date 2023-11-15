import { useParams } from "react-router-dom"

export default function ReadById() {
  const { id } = useParams()

  const apiUrl = `https://rickandmortyapi.com/api/character/${id}`
  // TODO: Implementar o carregamento da API
  // TODO: Guardar a informação recebida da API em um estado
  // TODO: Exibir essas informações no JSX

  return <div>ReadById: {id}</div>
}
