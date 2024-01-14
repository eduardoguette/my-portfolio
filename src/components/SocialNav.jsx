import { SpeedInsights } from '@vercel/speed-insights/react'
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
  }
]
const SocialNav = () => {
  return (
    <>
      <ul className="flex items-center justify-center gap-4 mt-4 flex-wrap">
        {social.map((item, index) => (
          <li key={index} className="relative inline-block group">
            <a
              href={item.url}
              className="flex items-center justify-center gap-2 border-2 px-4 py-2 rounded-full text-sm transition-transform hover:border-blue-200 border-twilight-secondary active:scale-[.98] text-neutral-200 hover:text-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 md:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
              {item.name}
            </a>
            <span class="absolute inset-0 z-10 bg-neutral-300 group-hover:bg-neutral-100 mt-1 ml-1 rounded-full -mr-0.5 -mb-0.5 group-hover:-mb-1 group-hover:-mr-1 transition-all hidden" />
          </li>
        ))}
      </ul>
      <SpeedInsights />
    </>
  )
}

export default SocialNav
