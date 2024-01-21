import { useEffect, useState } from 'react'
import { MiComputer, Moon, Sun } from './Icons'

export const ToggleDarkMode = () => {
  const localStorage = window.localStorage
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light')
  const [themeSystem, setThemeSystem] = useState(JSON.parse(localStorage.getItem('theme-system')) ?? 'false')

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('class', theme)

  }, [theme])

  const handleClick = (theme: string) => {
    if(theme === 'system') {
      localStorage.setItem('theme-system', "true")
      setThemeSystem(true)
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      setTheme(systemTheme)
      return
    } 
    setThemeSystem(false)
    setTheme(theme)
  }

  return (
    <div className="flex items-center gap-2 ml-auto w-max mt-4 ">
      <button 
        title='Set dark '
        onClick={() => handleClick('dark')}
        className={`h-6 w-6 grid place-content-center rounded-full hover:bg-neutral-100 hover:text-black ${theme === 'dark' && !themeSystem ? 'bg-gray-200 text-black' : ''}`}
      >
        <Moon />
      </button>
      <button
        title='Set light '
        onClick={() => handleClick('light')}
        className={`h-6 w-6 grid place-content-center rounded-full hover:bg-gray-200 hover:text-black ${theme === 'light' && !themeSystem ? 'bg-gray-200 text-black' : ''}`}
      >
        <Sun />
      </button>
      <button
        title='Set system '
        onClick={() => handleClick('system')}
        className={`h-6 w-6 grid place-content-center rounded-full hover:bg-gray-200 hover:text-black ${themeSystem ? 'bg-gray-200 text-black' : ''}`}
      >
        <MiComputer />
      </button>
    </div>
  )
}
