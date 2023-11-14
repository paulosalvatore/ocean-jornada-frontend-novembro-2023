import Tag from "../Tag/Tag"

export default function Card(props) {
  const item = props.item

  const tags = item.tags || []

  return <div className="card">
    <h2>{item.name}</h2>
    <div className="tags">
      {tags.map(function (element) {
        return <Tag text={element} />
      })}
    </div>
    <img src={item.imageUrl} />
  </div>
}
