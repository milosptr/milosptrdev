import React from 'react'
import { useTranslation } from 'next-i18next'
import * as Icons from '@/icons'

export const ServicesBox = ({ icon, title, description }) => {
  const { t } = useTranslation('common')
  const IconComponent = Icons[icon]
  return (
    <div className='rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/40'>
      <div className='flex items-center gap-3 font-semibold text-zinc-900 dark:text-zinc-100'>
        {IconComponent ? <IconComponent className='h-6 w-6' /> : null}
        <div className='mt-0.5 leading-none'>{t(title, title)}</div>
      </div>
      <div className='mt-3 text-sm text-zinc-500 dark:text-zinc-400'>{t(description, description)}</div>
    </div>
  )
}
