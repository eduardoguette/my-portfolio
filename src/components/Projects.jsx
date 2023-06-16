const Projects = ({ projects }) => {
  return (
    <div>
      <h2>Projects</h2>
      <ul className="flex md:flex-row gap-2">
        {projects.map((project, index) => (
          <li className="border p-3 border-gray-500 rounded-md" key={index}>
            <img
              src={project.image}
              alt={project.name}
              referrerPolicy="no-referrer"
            />
            <h3 className="font-medium">{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects
