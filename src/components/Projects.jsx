const Projects = ({ projects, name }) => {
  return (
    <div>
      <h4 className="text-lg font-bold underline decoration-wavy decoration-indigo-600">
        {name}
      </h4>
      <ul className="flex flex-col md:flex-row gap-4 mt-4">
        {projects.map((project, index) => (
          <li
            className="border p-3 border-gray-500 rounded-md bg-white"
            key={index}
          >
            <img
              src={project.image}
              alt={project.name}
              referrerPolicy="no-referrer"
            
            />
            <h3 className="font-bold text-lg mt-1">{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects
