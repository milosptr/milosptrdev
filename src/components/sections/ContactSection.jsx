import React from 'react'
import { useTranslation } from 'next-i18next'

export const ContactSection = () => {
  const { t } = useTranslation('common')
  const [subject, setSubject] = React.useState('')
  const [body, setBody] = React.useState('')
  const clearForm = () => {
    setTimeout(() => {
      setSubject('')
      setBody('')
    }, 1000)
  }

  return (
    <article
      id='contact'
      className='scroll-mt-16'
      style={{ paddingBottom: 0 }}>
      <div>
        <div className='mx-auto max-w-full px-6 lg:flex lg:px-12'>
          <div className='lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32'>
            <div className='typography mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-4xl lg:flex-auto'>
              <h2>
                <a href='/#contact'>{t('titles.contact')}</a>
              </h2>
              <div className='grid grid-cols-1 gap-8'>
                <p>{t('subtitles.contact')}</p>
                <div className='grid grid-cols-1 gap-4'>
                  <div>
                    <label
                      htmlFor='subject'
                      className='block text-sm font-semibold leading-6 dark:text-white'>
                      {t('general.subject')}
                    </label>
                    <div className='mt-2.5'>
                      <input
                        type='text'
                        name='subject'
                        id='subject'
                        autoComplete='subject'
                        value={subject}
                        onInput={(e) => setSubject(e.target.value)}
                        className='border-1 block w-full rounded-md border border-solid border-zinc-200 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:border-0 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div className=''>
                    <label
                      htmlFor='message'
                      className='block text-sm font-semibold leading-6 dark:text-white'>
                      {t('general.message')}
                    </label>
                    <div className='mt-2.5'>
                      <textarea
                        name='message'
                        id='message'
                        rows='4'
                        value={body}
                        onInput={(e) => setBody(e.target.value)}
                        className='block w-full rounded-md border border-solid border-zinc-200 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:border-0 sm:text-sm sm:leading-6'></textarea>
                    </div>
                  </div>
                </div>
                <a
                  href={`mailto:milosptr@hotmail.com?subject=${subject}&body=${body}`}
                  onClick={clearForm}
                  className='rounded-md bg-indigo-700 px-3.5 py-2.5 text-center text-sm font-semibold !text-white !no-underline shadow-sm transition-all duration-300 ease-in-out hover:bg-indigo-600'>
                  {t('general.send_message')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
