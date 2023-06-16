import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExperienceItem } from './ExperienceItem'
export const ExperienceList = ({ responsabilities }) => {
  const [collapsed, setCollapsed] = useState(true)
  const onClick = () => setCollapsed(!collapsed)
  const text = collapsed ? '...expand' : '...collapse'
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
          !collapsed ? '' : 'absolute  h-20  bg-gradient-to-t from-white to-transparent'
        }`}
      >
        <button
          className="absolute bottom-0 right-0  rounded-md border-gray-600 w-max px-2 py-1 text-xs bg-white hover:underline hover:shadow border"
          onClick={onClick}
        >
          {text} 
        </button>
      </div>
    </motion.ul>
  )
}
