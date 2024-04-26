'use client'

import useMounted from '@/hooks/use-mounted'
import { useTheme } from 'next-themes'

const ThemeSwitch: React.FC = () => {
  const mounted = useMounted()
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const isActive = theme === 'light'

  const switchClasses = `flex-center circle-6 text-slate-950 dark:text-white bg-white dark:bg-slate-950 transform ${
    isActive ? 'translate-x-0' : 'translate-x-6'
  } transition-transform duration-500 ease-in-out`

  return (
    <div
      // rerendering when mouted, cause the server may return different theme
      key={mounted ? 'mounted' : 'loading'}
      className="relative w-14 h-8 rounded-full p-1 cursor-pointer bg-slate-950 dark:bg-white"
      onClick={toggleTheme}
    >
      <button className={switchClasses}>
        <span className="dark:inline hidden">D</span>
        <span className="dark:hidden opacity-100">L</span>
      </button>
    </div>
  )
}

export default ThemeSwitch
