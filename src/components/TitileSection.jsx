export const TitileSection = ({ title, id, icon }) => {
  return (
    <div>
      <h2
        className="text-2xl font-bold flex gap-3 items-center  mt-4 mb-8"
        id={id}
      >
        {icon}
        {title}
      </h2>
    </div>
  )
}
