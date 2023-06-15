const social = [
  {
    name: 'GitHub',
    url: 'https://github.com/eduardoguette'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/eduardo-guette/'
  }
]
const SocialNav = () => {
  return (
    <ul className="flex items-center gap-2 mt-4">
      {social.map((item, index) => (
        <li key={index}>
          <a href={item.url} className="hover:text-indigo-500" target="_blank" rel="noopener noreferrer">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialNav