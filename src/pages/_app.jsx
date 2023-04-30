import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'

import { Layout } from '@/components/Layout'
import * as mdxComponents from '@/components/mdx'

import { appWithTranslation } from 'next-i18next'

import '@/styles/tailwind.css'
import 'focus-visible'
import { ErrorPage } from '@/components/ErrorPage'

function App({ Component, pageProps, router }) {
  if (pageProps?.statusCode === 404) return <ErrorPage />
  return (
    <>
      <Head>
        <title>Milos Petrovic | Full Stack Web Developer</title>
        <meta charSet='utf-8' />
        <meta
          name='description'
          content='I’m Milos, a 25 years old self-taught Full Stack Web developer.'
        />
      </Head>
      <ThemeProvider
        attribute='class'
        disableTransitionOnChange>
        <MDXProvider components={mdxComponents}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(App)
