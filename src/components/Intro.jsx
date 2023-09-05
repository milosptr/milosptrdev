import { IconLink } from '@/components/IconLink'
import { EmailIcon, GitHubIcon, InstagramIcon, LinkedInIcon } from '@/icons'
import { useTranslation } from 'next-i18next'

export function Intro() {
  const { t } = useTranslation('common')

  return (
    <>
      <h1 className='font-display text-4xl/tight font-light text-white'>
        {t('home.titleHello')}
        <br /> <span className='text-sky-300'>{t('home.title')}</span>
      </h1>
      <p className='mt-4 text-base text-gray-300'>{t('home.subtitle')}</p>
      <p className='mt-4 text-base text-gray-300'>{t('titles.front_end_tech_stack')}:</p>
      <p className='text-sm text-zinc-400'>
        HTML, CSS, Tailwind, JavaScript, TypeScript, ReactJS, VueJS, NextJS, NativeScript, Python
      </p>
      <p className='mt-4 text-base text-gray-300'>{t('titles.back_end_tech_stack')}:</p>
      <p className='text-sm text-zinc-400'>PHP, SQL, Laravel, WordPress, Shopfiy</p>
      <p className='mt-4 text-base text-gray-300'>{t('titles.designer_tools')}:</p>
      <p className='text-sm text-zinc-400'>Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator</p>
      <p className='mt-4 text-base text-gray-300'>{t('titles.web_polishing')}:</p>
      <p className='text-sm text-zinc-400'>Search Engine Optimization, Site Speed Optimization & Performance</p>
    </>
  )
}

export function IntroFooter() {
  const year = new Date().getFullYear()

  return (
    <div className='flex w-full flex-col items-center justify-center gap-2 text-[0.8125rem]/6 text-gray-500'>
      <div className='flex gap-x-3'>
        <IconLink
          href='https://www.linkedin.com/in/petrovic-milos/'
          icon={LinkedInIcon}
          compact
          large></IconLink>
        <IconLink
          href='https://github.com/milosptr'
          icon={GitHubIcon}
          compact
          large></IconLink>
        <IconLink
          href='https://www.instagram.com/somizmatika/'
          icon={InstagramIcon}
          compact
          large></IconLink>
        <IconLink
          href='mailto:milosptr@hotmail.com'
          icon={EmailIcon}
          compact
          large></IconLink>
      </div>
      <h6>© {year} Miloš Petrović</h6>
    </div>
  )
}
