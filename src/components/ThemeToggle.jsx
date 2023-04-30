import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@/icons'

export function ThemeToggle() {
  let [mounted, setMounted] = useState(false)
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      type='button'
      className='group flex items-center'
      onClick={() => setTheme(otherTheme)}>
      <span className='sr-only'>Switch to {otherTheme} theme</span>
      {resolvedTheme === 'light' ? (
        <MoonIcon className='h-7 w-7 !text-zinc-100' />
      ) : (
        <SunIcon className='h-7 w-7 !text-zinc-100' />
      )}
    </button>
  )
}
