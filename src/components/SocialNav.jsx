import { SpeedInsights } from '@vercel/speed-insights/react'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'

const social = [
  {
    name: 'Email',
    url: 'mailto:eduardoguette@gmail.com',
    icon: <MailIcon className="w-8 h-8" />
  },
  {
    name: 'GitHub',
    url: 'https://github.com/eduardoguette',
    icon: <GithubIcon className="w-8 h-8" />
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/eduardo-guette/',
    icon: <LinkedinIcon className="w-8 h-8" />
  }
]
const SocialNav = () => {
  return (
    <>
      <ul className="flex items-center   gap-4 flex-wrap ">
        {social.map((item, index) => (
          <li key={index} className="relative inline-block group">
            <a
              href={item.url}
              className="w-16 flex flex-col justify-center items-center rounded-md gap-2  aspect-square"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="">
                {item.icon}
              </span>
              <span className="text-center text-xs ">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <SpeedInsights />
    </>
  )
}

export default SocialNav
