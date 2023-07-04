import { AnimatePresence, motion } from 'framer-motion'
import { ExperienceList } from './ExperienceList'
import { TitileSection } from './TitileSection'
const Experience = ({ experience, name }) => { 
  return (
    <section className="mt-10" id="experience">
      <TitileSection title={name} id='experience' />
      <motion.ul layout className="mt-4 flex flex-col gap-4">
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
                <article className="border border-gray-500 rounded-md p-3  bg-white">
                  <header className="grid card-experience w-full">
                    <p
                      className="font-medium text-lg"
                      style={{
                        gridArea: 'companyName'
                      }}
                    >
                      {company}
                    </p>
                    <p
                      className="text-sm text-gray-500"
                      style={{
                        gridArea: 'position'
                      }}
                    >
                      {position}
                    </p>
                    <span
                      style={{
                        gridArea: 'date'
                      }}
                      className="ml-auto"
                    >
                      {date}
                    </span>
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
