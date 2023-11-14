export default function Card(props) {
  const item = props.item

  return <div className="card">
    <h2>{item.name}</h2>
    <div className="tags">
      <div className="tag">Status: Vivo</div>
      <div className="tag">Espécie: Humana</div>
      <div className="tag">Origem: Terra C-137</div>
    </div>
    <img src={item.imageUrl} />
  </div>
}
