import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { EnglishIcon, GermanIcon } from '@/icons'

export const LanguageToggle = () => {
  const { i18n } = useTranslation('common')
  const currentLocale = i18n.language

  return (
    <div className=''>
      {currentLocale === 'en' ? (
        <Link
          href='/de'
          locale='de'>
          <GermanIcon className='h-8 w-8 cursor-pointer' />
        </Link>
      ) : (
        <Link
          href='/'
          locale='en'>
          <EnglishIcon className='h-8 w-8 cursor-pointer' />
        </Link>
      )}
    </div>
  )
}
