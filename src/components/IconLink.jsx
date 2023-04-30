import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export function IconLink({ children, className, compact = false, large = false, icon: Icon, ...props }) {
  return (
    <Link
      {...props}
      className={twMerge(
        className,
        'group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300',
        compact ? 'gap-x-2' : 'gap-x-3'
      )}>
      <Icon className={twMerge('flex-none', large ? 'h-7 w-7' : 'h-4 w-4')} />
      {children && <span className='self-baseline text-white'>{children}</span>}
    </Link>
  )
}
