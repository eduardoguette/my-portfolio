export const TitileSection = ({ title, id }) => {
  return (
    <div>
      <h4
        className="text-2xl font-bold underline decoration-wavy decoration-indigo-600 my-4"
        id={id}
      >
        {title}
      </h4>
    </div>
  )
}
