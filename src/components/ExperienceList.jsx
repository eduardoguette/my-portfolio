import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExperienceItem } from './ExperienceItem'
export const ExperienceList = ({ responsabilities }) => {  
  const [collapsed, setCollapsed] = useState(true)
  const onClick = () => setCollapsed(!collapsed)
  const text = collapsed ? 'Expand' : 'Collapse'
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      style={{
        gridArea: 'responsabilities'
      }}
    >
      <div
        className={`${collapsed ? 'h-12 overflow-hidden relative' : 'h-auto'}`}
      >
        {collapsed && (
          <span
            className={`${
              collapsed
                ? ' absolute w-full h-full overflow-hidden bg-gradient-to-b from-transparent to-white'
                : 'h-auto hidden'
            }`}
          />
        )}
        {responsabilities.map((responsability) => (
          <ExperienceItem
            key={responsability}
            responsability={responsability}
          />
        ))}
      </div>
      <footer className="flex justify-between pt-4">
        <div className="relative w-max   ml-auto group">
          <span className="w-full h-full  bg-gray-500 ml-0.5 mt-0.5 rounded-lg absolute left-0 top-0 group-active:m-0 group-hover:bg-indigo-950 transition-all group-hover:ml-1 group-hover:mt-1" />
          <button
            className="rounded-md border-gray-600 w-max px-3 py-1.5 text-xs bg-white border z-10 relative font-medium  hover:text-gray-950 text-gray-800 "
            onClick={onClick}
          >
            {text}
          </button>
        </div>
      </footer>
    </motion.article>
  )
}
