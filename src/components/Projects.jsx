import { motion } from 'framer-motion'
import { Colaborators } from './Colaborators'
import { TitileSection } from './TitileSection'

const Projects = ({ projects, name }) => {
  
  return (
    <div>
      <TitileSection title={name} id="projects" />
      <motion.ul
        className={`grid grid-cols-[repeat(auto-fill,minmax(min(260px,100%),1fr))] gap-4 transition-all  `}
      >
        {projects.map((project, index) => (
          <motion.li
            className="border p-3 border-gray-500 rounded-md bg-white flex flex-col  transition-all group"
            key={index}
          >
            <img
              src={project.image}
              alt={project.name}
              referrerPolicy="no-referrer"
            />
            <h3 className="font-bold text-lg mt-1">{project.name}</h3>
            <p className="mb-6">{project.description}</p>
            <footer className="mt-auto w-full text-sm flex gap-2 items-center">
              <div className="flex items-start gap-2">
                <div className="flex  justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2 w-max">
                  {project.colaborators.map((colaborator, index) => (
                    <Colaborators key={index} colaborator={colaborator} />
                  ))}
                </div>
              </div>
              <div className="w-max ml-auto  flex items-center gap-2 ">
                <a
                  href={project.github}
                  target="_blank"
                  className=" hover:text-indigo-600 text-gray-800"
                >
                  Code
                </a>
                <a
                  href={project.url}
                  target="_blank"
                  className="hover:text-indigo-600 text-gray-800"
                >
                  Live
                </a>
              </div>
            </footer>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default Projects
