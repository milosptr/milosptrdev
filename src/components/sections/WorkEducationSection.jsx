import { useTranslation } from 'next-i18next'
import { WorkBox } from '../boxes/WorkBox'
import { EducationBox } from '../boxes/EducationBox'

export const WorkEducationSection = () => {
  const { t } = useTranslation('common')
  return (
    <article
      id='education'
      className='scroll-mt-16'
      style={{ paddingBottom: 0 }}>
      <div>
        <div className='mx-auto max-w-8xl px-6 lg:flex lg:px-12'>
          <div className='lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32'>
            <div className='typography mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-4xl lg:flex-auto'>
              <h2>
                <a href='/#education'>{t('titles.education_and_work')}</a>
              </h2>
              <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
                <EducationBox />
                <WorkBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
