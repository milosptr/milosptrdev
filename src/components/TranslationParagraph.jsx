import { useTranslation } from 'next-i18next'

export const TranslationParagraph = ({ value }) => {
  const { t } = useTranslation('common')
  return <p dangerouslySetInnerHTML={{ __html: t(value, value) }}></p>
}
