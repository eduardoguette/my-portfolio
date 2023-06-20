export const Colaborators = ({ colaborator }) => {
  return (
    <a href={colaborator.url} target="_blank" rel="noreferrer">
      <img
        src={colaborator.img}
        alt={colaborator.name}
        className="w-8 h-8 rounded-full inline-block border-2 border-white aspect-square"
        referrerPolicy="no-referrer"
        height={32}
        width={32}
        title={colaborator.name}
      />
    </a>
  )
}
