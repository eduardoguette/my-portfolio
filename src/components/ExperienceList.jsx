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
      {responsabilities.map((responsability) => (
        <ExperienceItem key={responsability} responsability={responsability} />
      ))}
    </motion.article>
  )
}
