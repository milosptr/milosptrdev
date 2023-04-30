import { EducationIcon } from '@/icons'
import { WorkListItem } from '../WorkListItem'
import { useTranslation } from 'next-i18next'

export const EducationBox = () => {
  const { t } = useTranslation('common')

  return (
    <div className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'>
      <div className='flex items-center gap-3 font-semibold text-zinc-900 dark:text-zinc-100'>
        <EducationIcon className='h-6 w-6' />
        <div className='mt-0.5 leading-none'>{t('titles.education')}</div>
      </div>
      <ol className='mt-6 space-y-4 pl-[0!important]'>
        <WorkListItem
          company='Gymnasium High School Zajecar'
          role='Information Technologies'
          dateFrom='2012'
          dateTo='2016'
        />
        <WorkListItem
          company='Mathematics University - Belgrade'
          role='Information Technologies and Computer Science'
          dateFrom='2016'
          dateTo='2018'
        />
        <hr />
        <WorkListItem
          company='React - The Complete Guide'
          role='(incl Hooks, React Router, Redux)'
          issuingDate={'Sept 2022'}
          issuedBy={'Udemy'}
        />
        <WorkListItem
          company='Master Laravel'
          role='GraphQL, Vuejs and Tailwind'
          issuingDate={'Sept 2022'}
          issuedBy={'Udemy'}
        />
        <WorkListItem
          company='Rational Emotive Behavior Therapy'
          role='Certified Life Coach by Transformation Academy'
          issuingDate={'May 2021'}
        />
        <WorkListItem
          company='SQL for Data Analysis'
          role='Crash Course'
          issuingDate={'Aug 2020'}
          issuedBy={'Udemy'}
        />
      </ol>
    </div>
  )
}