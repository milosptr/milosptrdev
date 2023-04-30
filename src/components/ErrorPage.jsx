import React from 'react'
import { useId } from 'react'
import { StarField } from './StarField'

export const ErrorPage = () => {
  let id = useId()
  return (
    <main className='relative isolate min-h-screen'>
      <StarField className='right-0 top-[100px] w-2/3 rotate-[10deg] lg:w-1/2' />
      <div className='absolute inset-0 -z-10 w-full overflow-hidden bg-gray-950'>
        <svg
          className='absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]'
          aria-hidden='true'>
          <defs>
            <radialGradient
              id={`${id}-desktop`}
              cx='100%'>
              <stop
                offset='0%'
                stopColor='rgba(56, 189, 248, 0.3)'
              />
              <stop
                offset='53.95%'
                stopColor='rgba(0, 71, 255, 0.09)'
              />
              <stop
                offset='100%'
                stopColor='rgba(10, 14, 23, 0)'
              />
            </radialGradient>
            <radialGradient
              id={`${id}-mobile`}
              cy='100%'>
              <stop
                offset='0%'
                stopColor='rgba(56, 189, 248, 0.3)'
              />
              <stop
                offset='53.95%'
                stopColor='rgba(0, 71, 255, 0.09)'
              />
              <stop
                offset='100%'
                stopColor='rgba(10, 14, 23, 0)'
              />
            </radialGradient>
          </defs>
          <rect
            width='100%'
            height='100%'
            fill={`url(#${id}-desktop)`}
            className='hidden lg:block'
          />
          <rect
            width='100%'
            height='100%'
            fill={`url(#${id}-mobile)`}
            className='lg:hidden'
          />
        </svg>
        <div className='absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px' />
      </div>
      <div className='mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8'>
        <p className='text-base font-semibold leading-8 text-white'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl'>Page not found</h1>
        <p className='mt-4 text-base text-white/70 sm:mt-6'>Sorry, we couldn’t find the page you’re looking for.</p>
        <div className='mt-10 flex justify-center'>
          <a
            href='/'
            className='text-sm font-semibold leading-7 text-white'>
            <span aria-hidden='true'>&larr;</span> Back to home
          </a>
        </div>
      </div>
    </main>
  )
}
