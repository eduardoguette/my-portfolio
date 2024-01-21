import { useEffect, useState } from 'react'
import { MiComputer, Moon, Sun } from './Icons'

export const ToggleDarkMode = () => {
  const localStorage = window.localStorage
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light')
  const [themeSystem, setThemeSystem] = useState(JSON.parse(localStorage.getItem('theme-system')) ?? 'false')

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('theme', theme)

  }, [theme])

  const handleClick = (theme: string) => {
    if(theme === 'system') {
      localStorage.setItem('theme-system', "true")
      setThemeSystem(true)
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      setTheme(systemTheme)
      return
    }
    localStorage.setItem('theme-system', "false")
    setThemeSystem(false)
    setTheme(theme)
  }

  return (
    <div className="flex items-center gap-2 ml-auto w-max mt-4 ">
      <button
        onClick={() => handleClick('light')}
        className={`h-6 w-6 grid place-content-center rounded-full hover:bg-neutral-100 hover:text-black ${theme === 'light' && !themeSystem ? 'bg-neutral-100 text-black' : ''}`}
      >
        <Sun />
      </button>
      <button
        onClick={() => handleClick('dark')}
        className={`h-6 w-6 grid place-content-center rounded-full hover:bg-neutral-100 hover:text-black ${theme === 'dark' && !themeSystem ? 'bg-neutral-100 text-black' : ''}`}
      >
        <Moon />
      </button>
      <button
        onClick={() => handleClick('system')}
        className={`h-6 w-6 grid place-content-center rounded-full hover:bg-neutral-100 hover:text-black ${themeSystem ? 'bg-neutral-100 text-black' : ''}`}
      >
        <MiComputer />
      </button>
    </div>
  )
}
