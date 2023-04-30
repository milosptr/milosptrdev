import { DownloadIcon, WorkIcon } from '@/icons'
import { WorkListItem } from '../WorkListItem'
import { useTranslation } from 'next-i18next'

export const WorkBox = () => {
  const { t } = useTranslation('common')

  return (
    <div className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'>
      <div className='flex items-center gap-3 font-semibold text-zinc-900 dark:text-zinc-100'>
        <WorkIcon className='h-6 w-6' />
        <div className='mt-0.5 leading-none'>{t('titles.work')}</div>
        <div className='ml-auto text-sm font-medium text-zinc-900 dark:text-zinc-100'>6+ {t('general.years')}</div>
      </div>
      <ol className='mt-6 space-y-4 pl-[0!important]'>
        <WorkListItem
          company='Sidekick Health'
          role='Senior Web Developer'
          dateFrom='2022'
          dateTo={t('general.today')}
        />
        <WorkListItem
          company='Morph Networks'
          role='Full Stack Developer'
          dateFrom='2019'
          dateTo='2022'
        />
        <WorkListItem
          company='AS Media Agency'
          role='CEO & CTO'
          dateFrom='2015'
          dateTo='2022'
        />
        <WorkListItem
          company='Jungo Digital Solutions'
          role='Front End Developer'
          dateFrom='2018'
          dateTo='2019'
        />
        <WorkListItem
          company='eTech 360 (United States)'
          role='Front End Developer & Team Lead'
          dateFrom='2017'
          dateTo='2018'
        />
        <WorkListItem
          company='Union of Secondary Schools Students'
          role='Graphic Designer and WordPress Developer'
          dateFrom='2014'
          dateTo='2016'
        />
      </ol>
      <a
        className='group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70'
        href='/cv/MilosPetrovicCV-05-2023.pdf'
        download>
        {t('general.download_cv')}
        <DownloadIcon className='h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50' />
      </a>
    </div>
  )
}
