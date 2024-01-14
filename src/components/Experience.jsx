import { AnimatePresence, motion } from 'framer-motion'
import { ExperienceList } from './ExperienceList'
import { HandBag } from './Icons'
import { TitileSection } from './TitileSection'
const Experience = ({ experience, name }) => {
  return (
    <section className="mt-20" id="experience">
      <TitileSection title={name} id="experience" icon={<HandBag className={'h-10 w-10'} />} />
      <motion.ul layout className=" flex flex-col reveal">
        <AnimatePresence>
          {experience.map(
            ({ id, company, position, date, responsabilities }, indx) => (
              <motion.li
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 * indx + 0.2 }}
                key={id}
                className="w-full transition-all"
              >
                <article className=" border-gray-500 pl-5 border-l pb-10 relative">
                  <span className="h-3 w-3 rounded-full block bg-white absolute -left-1.5 top-1.5"></span>
                  <time
                    style={{
                      gridArea: 'date'
                    }}
                    className="ml-auto"
                  >
                    {date}
                  </time>
                  <header className="my-4 card-experience w-full">
                    <p
                      className="font-medium text-2xl  text-blue-200"
                      style={{
                        gridArea: 'companyName'
                      }}
                    >
                      {position} - {company} 
                    </p>
                    

                    <ExperienceList responsabilities={responsabilities} />
                  </header>
                </article>
              </motion.li>
            )
          )}
        </AnimatePresence>
      </motion.ul>
    </section>
  )
}

export default Experience
 