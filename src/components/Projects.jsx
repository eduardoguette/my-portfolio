import { motion } from 'framer-motion'
import { Colaborators } from './Colaborators'
import { TitileSection } from './TitileSection'

const Projects = ({ projects, name }) => {
  return (
    <div>
      <TitileSection title={name} id="projects" />
      <motion.ul
        className={`grid grid-cols-[repeat(auto-fill,minmax(min(260px,100%),1fr))] gap-6 transition-all  reveal`}
      >
        {projects.map((project, index) => (
          <motion.li
            className="border border-gray-500 rounded-lg overflow-hidden bg-white flex flex-col  transition-all group "
            key={index}
          >
            <picture className="block aspect-video">
              <img
                src={project.image}
                alt={project.name}
                referrerPolicy="no-referrer"
                loading="lazy"
                width="100%"
                height={140}
                className="object-cover "
              />
            </picture>
            <div className='p-5'>
              <h3 className="font-bold text-lg mt-1">{project.name}</h3>
              <p className="">{project.description}</p>
            </div>
            <footer className="mt-auto w-full p-5 pt-0  text-sm flex gap-2 items-center">
              <div className="flex items-start gap-2">
                <div className="flex  justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2 w-max">
                  {project.colaborators.map((colaborator, index) => (
                    <Colaborators key={index} colaborator={colaborator} />
                  ))}
                </div>
              </div>
              <div className="w-max ml-auto text-xs flex items-center gap-2 ">
                <a
                  href={project.github}
                  target="_blank"
                  className=" text-indigo-600 hover:underline font-medium "
                >
                  Code
                </a>
                <a
                  href={project.url}
                  target="_blank"
                  className="text-indigo-600 hover:underline font-medium"
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
