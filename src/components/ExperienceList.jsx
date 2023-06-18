import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExperienceItem } from './ExperienceItem'
export const ExperienceList = ({ responsabilities }) => {
  const [collapsed, setCollapsed] = useState(true)
  const onClick = () => setCollapsed(!collapsed)
  const text = collapsed ? 'Expand' : 'Collapse'
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      style={{
        gridArea: 'responsabilities'
      }}
      className={`list-disc ml-4 relative ${
        collapsed ? 'h-[80px] overflow-hidden' : 'h-auto pb-6'
      } `}
    >
      {responsabilities.map((responsability) => (
        <ExperienceItem key={responsability} responsability={responsability} />
      ))}
      <div
        className={` z-10 bottom-0 w-full py-2 ${
          !collapsed
            ? ''
            : 'absolute  h-20  bg-gradient-to-t from-white to-transparent'
        }`}
      >
        <div className='absolute w-max  bottom-1 right-1 group'>
          <span className="w-full h-full bg-gray-900 ml-0.5 mt-0.5 rounded-lg absolute left-0 top-0 group-active:m-0 group-hover:bg-indigo-950 transition-all shadow " />
          <button
            className="rounded-md border-gray-600 w-max px-3 py-1.5 text-xs bg-white border z-10 relative font-medium"
            onClick={onClick}
          >
            {text}
          </button>
        </div>
      </div>
    </motion.ul>
  )
}
