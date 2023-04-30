import React from 'react'
export const WorkListItem = ({ company, role, dateFrom, dateTo, issuingDate, issuedBy }) => {
  return (
    <li className='flex gap-4'>
      <dl className='flex flex-auto flex-wrap gap-x-2'>
        <dt className='sr-only'>Company</dt>
        <dd className='w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100'>{company}</dd>
        <dt className='sr-only'>Role</dt>
        <dd className='text-xs text-zinc-500 dark:text-zinc-400'>{role}</dd>
        <dt className='sr-only'>Date</dt>
        {!!dateFrom && !!dateTo && (
          <dd
            className='ml-auto text-xs text-zinc-400 dark:text-zinc-500'
            aria-label={`${dateFrom} until ${dateTo}`}>
            <time dateTime={dateFrom}>{dateFrom}</time> <span aria-hidden='true'>—</span>{' '}
            <time dateTime={dateTo}>{dateTo}</time>
          </dd>
        )}
        {!!issuingDate && (
          <dd
            className='ml-auto text-xs text-zinc-400 dark:text-zinc-500'
            aria-label={`Issued ${issuingDate}`}>
            <time dateTime={issuingDate}>{issuingDate}</time>
            {!!issuedBy && <span aria-hidden='true'> - {issuedBy}</span>}
          </dd>
        )}
      </dl>
    </li>
  )
}
