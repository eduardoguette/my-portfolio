export const Colaborators = ({ colaborator }) => {
  return (
    <a href={colaborator.url} target="_blank" rel="noreferrer">
      <img
        src={colaborator.img}
        alt={colaborator.name}
        className="w-8 h-8 rounded-full inline-block border-2 border-white aspect-square"
        referrerPolicy="no-referrer"
        title={colaborator.name}
      />
    </a>
  )
}
