import React from 'react'
import Head from 'next/head'
import { useThemeUI } from 'theme-ui'

const Meta = ({ title, description, card, url }) => {
  const { theme, colorMode } = useThemeUI()
  if (!description) {
    console.warn(
      'a custom description should be used for search engine optimization'
    )
  }
  if (!title) {
    console.warn('a custom title should be used for search engine optimization')
  }
  const titleProp = title || 'Zalxon'
  const descriptionProp =
    description ||
    'Improving the transparency and scientific integrity of climate solutions with open data and tools.'
  const cardProp = card || 'https://images.zalxon.com/social/homepage.png'
  const urlProp = url || 'https://zalxon.com'

  return (
    <Head>
      <title>{titleProp}</title>
      <meta name='description' content={descriptionProp} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      {url && <link rel='canonical' href={url} />}
      <link
        rel='alternate icon'
        type='image/png'
        href='https://images.zalxon.com/favicon.png'
      />
      <link
        rel='icon'
        type='image/svg+xml'
        href='https://images.zalxon.com/favicon.svg'
      />
      <link
        rel='preload'
        href='https://fonts.zalxon.com/relative/relative-book-pro.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link
        rel='preload'
        href='https://fonts.zalxon.com/relative/relative-medium-pro.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link
        rel='preload'
        href='https://fonts.zalxon.com/relative/relative-mono-11-pitch-pro.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link
        rel='preload'
        href='https://fonts.zalxon.com/relative/relative-faux-book-pro.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link rel='manifest' href='https://images.zalxon.com/manifest.json' />
      <meta name='theme-color' content={theme.colors.background} />
      <meta
        name='color-scheme'
        content={colorMode === 'light' ? 'light' : 'dark'}
      />
      <link
        rel='mask-icon'
        href='https://images.zalxon.com/safari-pinned-tab.svg'
        color='#000000'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='https://images.zalxon.com/apple-touch-icon.png'
      />
      <meta name='msapplication-TileColor' content={theme.colors.background} />
      <meta
        name='msapplication-TileImage'
        content='https://images.zalxon.com/mstile-144x144.png'
      />
      <meta
        name='msapplication-config'
        content='https://images.zalxon.com/browserconfig.xml'
      />
      <meta property='og:title' content={titleProp} />
      <meta property='og:description' content={descriptionProp} />
      <meta property='og:image' content={cardProp} />
      <meta property='og:url' content={urlProp} />
      <meta name='twitter:title' content={titleProp} />
      <meta name='twitter:description' content={descriptionProp} />
      <meta name='twitter:image' content={cardProp} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='format-detection' content='telephone=no' />
    </Head>
  )
}

export default Meta
