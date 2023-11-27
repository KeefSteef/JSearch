import Badge from './Badge.jsx'

function Badges({ data, onCloseHandler, short = false }) {
  return (
    <>
      {data.map((item) => (
        <Badge key={`badge_${item}`} short={short} onClose={() => onCloseHandler(item)}>
          {item.toUpperCase()}
        </Badge>
      ))}
    </>
  )
}

export default Badges
