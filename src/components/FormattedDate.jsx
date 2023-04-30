const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC'
})

export function FormattedDate({ date, ...props }) {
  let formatedDate = date
  let isoDate = ''
  if (date.length === 10) {
    try {
      formatedDate = typeof date === 'string' ? new Date(date) : date
      isoDate = formatedDate.toISOString()
      formatedDate = dateFormatter.format(formatedDate)
    } catch (e) {
      formatedDate = date
    }
  }

  return (
    <time
      dateTime={isoDate}
      {...props}>
      {formatedDate}
    </time>
  )
}
