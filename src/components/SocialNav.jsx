import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'

const social = [
  {
    name: 'Email',
    url: 'mailto:eduardoguette@gmail.com',
    icon: <MailIcon className="w-6 h-6" />
  },
  {
    name: 'GitHub',
    url: 'https://github.com/eduardoguette',
    icon: <GithubIcon className="w-6 h-6" />
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/eduardo-guette/',
    icon: <LinkedinIcon className="w-6 h-6" />
  },
]
const SocialNav = () => {
  return (
    <ul className="flex items-center gap-4 mt-4 flex-wrap">
      {social.map((item, index) => (
        <li key={index} className='relative inline-block group'>
          <span className='w-full h-full  bg-gray-500 ml-0.5 mt-0.5 rounded-lg absolute left-0 top-0 group-active:m-0 group-hover:bg-indigo-950 transition-all group-hover:ml-1 group-hover:mt-1'/>
          <a
            href={item.url}
            className=" flex items-center gap-2 bg-white relative z-20 rounded-md px-4 py-2 border border-gray-900 font-medium hover:text-gray-950 text-gray-700 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialNav
