export const TitileSection = ({ title, id }) => {
  return (
    <div>
      <h2
        className="text-2xl font-bold text-gray-700 my-4"
        id={id}
      >
        {title}
      </h2>
    </div>
  )
}
