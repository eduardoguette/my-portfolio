import { motion } from 'framer-motion'
import { Colaborators } from './Colaborators'
import { CodeIcon } from './Icons'
import { TitileSection } from './TitileSection'

const Projects = ({ projects, name }) => {
  return (
    <div >
      <TitileSection
        title={name}
        id="projects"
        icon={<CodeIcon className={'h-10 w-10'} />}
      />
      <motion.ul className={` grid md:grid-cols-2 gap-6 transition-all reveal`}>
        {projects.map((project, index) => (
          <motion.li
            className={`border border-twilight-secondary   rounded-xl overflow-hidden   flex flex-col  transition-all group index${index}`}
            key={index}
            style={
              {
                /* 
              gridArea: `index${index}` */
              }
            }
          >
            <picture className="block ">
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

            <>
              <div className="p-5 ">
                <h3 className="font-bold text-lg mt-1">{project.name}</h3>
                <p className="text-ellipsis ">{project.description}</p>
              </div>
              <footer className="flex mt-auto w-full p-5 pt-0  text-sm  gap-2 items-center">
                <div className="flex items-start gap-2">
                  <div className="flex  justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2 w-max">
                    {project.colaborators.map((colaborator, index) => (
                      <Colaborators key={index} colaborator={colaborator} />
                    ))}
                  </div>
                </div>
                <div className="w-max ml-auto flex items-center gap-2 ">
                  <a
                    href={project.github}
                    target="_blank"
                    className=" bg-twilight-primary hover:bg-twilight-secondary rounded-full px-2 py-1 font-medium "
                  >
                    Code
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    className="  rounded-full px-2 py-1 bg-yellow-200 hover:bg-yellow-100 text-black font-medium"
                  >
                    Live
                  </a>
                </div>
              </footer>
            </>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default Projects
