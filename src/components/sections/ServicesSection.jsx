import { useTranslation } from 'next-i18next'
import { ServicesBox } from '../boxes/ServicesBox'

export const ServicesSection = () => {
  const { t } = useTranslation('common')
  const services = t('services', { returnObjects: true })
  const servicesList = Array.isArray(services) ? services : []
  return (
    <article
      id='services'
      className='scroll-mt-16'
      style={{ paddingBottom: 0 }}>
      <div>
        <div className='mx-auto max-w-full px-6 lg:flex lg:px-12'>
          <div className='lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32'>
            <div className='typography mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-4xl lg:flex-auto'>
              <h2>
                <a href='/#services'>{t('titles.services')}</a>
              </h2>
              <p>{t('subtitles.services')}</p>
              <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
                {servicesList.map((service, i) => (
                  <ServicesBox
                    key={i}
                    {...service}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
