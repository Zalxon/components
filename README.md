
# zalxon / components

**shared react components for our websites**

[![GitHub][github-badge]][github]
[![Build Status]][actions]
![MIT License][]
![NPM Version][]

[github]: https://github.com/zalxon/components
[github-badge]: https://badgen.net/badge/-/github?icon=github&label
[build status]: https://github.com/zalxon/components/actions/workflows/main.yml/badge.svg
[actions]: https://github.com/zalxon/components/actions/workflows/main.yml
[mit license]: https://badgen.net/badge/license/MIT/blue
[npm version]: https://img.shields.io/npm/v/@zalxon/components

These are a set of modular but opinionated [`react`](https://github.com/facebook/react) components. They assume and make extensive use of [`theme-ui`](https://github.com/system-ui/theme-ui) and [`next`](https://github.com/vercel/next.js), and are meant to be composed with our [`theme`](https://github.com/zalxon/theme). The main use cases are to encourage consistency throughout our design and streamline building our own websites by reducing boilerplate. However, over time we might expand them to enable easier embedding of our content into other websites.

See them demoed at [zalxon.com/design](https://zalxon.com/design).

## usage

### Initializing the Theme Provider

When working with some of the components, it is important to have a `theme` object in place. Therefore, to ensure smooth functioning of the components, you must initialize the theme provider in your `Next.js` project. Here's an example of how you can achieve this in `pages/_app.js`:

```jsx
import { ThemeProvider } from 'theme-ui'

// import your theme or define it here
const theme = {}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
```

### Using the components

To use, import the component(s) you want into your `next` project. Here are some examples.

Use our logo and monogram:

```jsx
import { Logo, Monogram } from '@zalxon/components'
```

Use our icons:

```jsx
import { Icons } from '@zalxon/components'

const { Check, Question, Info } = Icons
```

Render a simple layout without a footer

```jsx
import { Layout, Logo, Monogram } from '@zalxon/components'

const Index = () => {
  return (
    <Layout footer={false}>
      <Logo sx={{ width: 180 }} />
      <Monogram sx={{ width: 60 }} />
    </Layout>
  )
}

export default Index
```

For more usage examples checkout our [`design`](https://github.com/zalxon/design) sample which showcases all these components live.

## development

To update a component and publish a new version, first make your changes, then follow these steps

- Increase the version number in `package.json`
- `npm run build`
- `npm publish`

## license

All the code in this repository is [MIT](https://choosealicense.com/licenses/mit/) licensed, but we request that you please provide attribution if reusing any of our digital content (graphics, logo, articles, etc.).

## about us

Zalxon is a non-profit organization that uses data and science for healthcare action. We aim to improve the transparency and scientific integrity of healthcare solutions with open data and tools. Find out more at [zalxon.com](https://zalxon.com/) or get in touch by [opening an issue](https://github.com/zalxon/components/issues/new) or [sending us an email](mailto:hello@zalxon.com).
