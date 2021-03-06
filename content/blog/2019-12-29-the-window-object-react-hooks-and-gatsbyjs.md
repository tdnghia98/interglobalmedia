---
title: 'The window object, React hooks, and GatsbyJS'
date: 2019-12-29T20:25:39.817Z
description: >-
    In this episode, I talk discuss how I came about successfully adding media
    queries to a React element's inline styles.
image: /img/stanislav-kondratiev-123540-unsplash.jpg
tags:
    - npm
    - browser-monads
    - window-object
    - media-queries
    - inline-styles
    - jsx
    - react
    - gatsbyjs
categories:
    - gatsbyjs
author: Maria D. Campbell
---

-   Link to
    [The window object, React hooks, and GatsbyJS](https://anchor.fm/maria-campbell/episodes/The-window-object--React-hooks--and-GatsbyJS-e9t7ks)
    podcast on anchorfm

This past Friday I added a Crisp chat box to
[interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/).
Afterwards, I visited the website on mobile, and noticed that my
`ScrollUpButton` was not well positioned as a result of the **_new_** **chat
box** when the **browser window** was `< 560px wide`.

This really bothered me, and I wanted to fix it. The problem was, however, that
I use `inline styling` inside the `ScrollUpButton` **component** and didn't know
how I could **_add_** **media queries** to `inline styling` in **React**.

In my regular `JSX`, I use `styled-components` and am able to **_add_** **media
queries** to those styles easily and in the same way as I would in **CSS** or
**SCSS**. But `inline styles` inside a **component element** is another story.

I started googling for answers, and came across the following very interesting
solution:

-   [React inline styles and media queries using a custom React Hook](https://medium.com/@ttennant/react-inline-styles-and-media-queries-using-a-custom-react-hook-e76fa9ec89f6)

I haven't had the time or chance to get too much into **React hooks**, so I
found this opportunity to use them in this instance very exciting!

Based on the article, I came up with the following re-usable hook called
`useMediaQuery` which I stored in a folder called `hooks` in my `src` folder and
placed the `hook` in a file called `mediaQueryHooks.js`:

```js
import {useEffect, useState} from 'react'
import {window} from 'browser-monads'

export const useMediaQuery = query => {
    const mediaMatch = window.matchMedia(query)
    const [matches, setMatches] = useState(mediaMatch.matches)

    useEffect(() => {
        const handler = e => setMatches(e.matches)
        mediaMatch.addListener(handler)
        return () => mediaMatch.removeListener(handler)
    })
    return matches
}
```

Then I imported the hook into my `Footer.js` component and my `index.js` home
page:

```js
// Footer.js
import {useMediaQuery} from '../../hooks/mediaQueryHooks'

// index.js
import {useMediaQuery} from '../hooks/mediaQueryHooks'
```

I used the hook in `Footer.js`:

```js

const styles = {
    container: (notRightMargin, marginBottomLess) => ({
        background: 'transparent',
        outline: 'none',
        marginBottom: marginBottomLess ? '3rem' : '3.75rem',
        marginRight: notRightMargin ? '-0.25rem' : '0.5rem',
    }),
}

const Footer = () => {
    const notRightMargin = useMediaQuery('(max-width: 559px)')
    const marginBottomLess = useMediaQuery('(max-width: 559px)')
    return (
    ....
    <ScrollUpButton
    style={styles.container(notRightMargin, marginBottomLess)}
    ContainerClassName="ScrollUpButton__Container"
    />
    ....
    )
}

```

as well as index.js:

```js

const styles = {
    container: (notRightMargin, marginBottomLess) => ({
        background: 'transparent',
        outline: 'none',
        marginBottom: marginBottomLess ? '3rem' : '3.75rem',
        marginRight: notRightMargin ? '-0.25rem' : '0.5rem',
    }),
}

const IndexPage = props => {
    ...
    const notRightMargin = useMediaQuery('(max-width: 559px)')
    const marginBottomLess = useMediaQuery('(max-width: 559px)')
    return (
    ...
    <ScrollUpButton
    style={styles.container(notRightMargin,marginBottomLess)}
    ContainerClassName="ScrollUpButton__Container"
    />
    ...
    )
}

```

Then I ran

```
npx gatsby develop

```

and everything rendered as it should in the browser window when it was `< 560px`
wide. But when I ran

```
npx gatsby build
```

I got the following errors in **Command Line**:

```
npx gatsby build                                                   ⏎ ✹ ✭
success open and validate gatsby-configs - 0.083s
success load plugins - 1.829s
success onPreInit - 0.009s
success delete html and css files from previous builds - 0.029s
success initialize cache - 0.008s
success copy gatsby files - 0.235s
success onPreBootstrap - 0.017s
success createSchemaCustomization - 0.007s
success source and transform nodes - 0.601s
success building schema - 0.518s
success createPages - 0.226s
success createPagesStatefully - 0.201s
success onPreExtractQueries - 0.002s
success update schema - 0.061s
success extract queries from components - 0.639s
success write out requires - 0.008s
success write out redirect data - 0.003s
success Build manifest and related icons - 0.125s
success onPostBootstrap - 0.160s

info bootstrap finished - 8.431 s

warn "export 'windowSize' was not found in '../../hooks/windowHooks'
warn "export 'windowSize' was not found in '../../hooks/windowHooks'
success Building production JavaScript and CSS bundles - 22.721s
success Rewriting compilation hashes - 0.004s
success run queries - 25.615s - 207/207 8.08/s
failed Building static HTML for pages - 3.727s

 ERROR #95312

"window" is not available during server side rendering.

See our docs page for more info on this error: https://gatsby.dev/debug-html

2 |
3 | export const useMediaQuery = (query) => {
> 4 | const mediaMatch = window.matchMedia(query);
|             ^
5 |   const [matches, setMatches] = useState(mediaMatch.matches);
6 |     useEffect(() => {
7 |         const handler = e => setMatches(e.matches);

WebpackError: ReferenceError: window is not defined

- mediaQueryHooks.js:4 useMediaQuery
src/hooks/mediaQueryHooks.js:4:24

- Footer.js:160 Footer

src/components/Footer/Footer.js:160:42
```

I tried all sorts of solutions which I came across on the `GatsbyJS` **repo**
and elsewhere which I won't even get into here, because they were useless and
just created even more errors.

Then I googled again for the window object as not being defined in **Gatsby**
using **React hooks**. I don't remember the exact words I used this time, but
this was the only time I ended up with the right search result. This is what I
came up with:

-   [Use document and window with Gatsby](https://medium.com/@Jense5_/use-document-and-window-with-gatsby-e9a92ee31f36)

**Jensen Bernard** writes about the `npm package` he **_created_** called
`browser-monads` in response to this error he also received in **GatbsyJS**.

All I had to do was `import` it into `mediaQueryHooks.js` where my
`useMediaQuery` **React hook** resides.

```js
// mediaQueryHooks.js
import {window} from 'browser-monads'
```

When I ran `npx gatsby build` again, it was successful! And when I
**_deployed_** the changes to **Netlify**, the **_deployment_** to **remote**
was successful as well!

And that was it!

I will be embedding this episode of **Plugging in The Holes** along with a
**_transcript_** in the form of a **post** on
[interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your
**_hearing_** and **_reading_** pleasure. I will be including the related
resource links mentioned in the podcast of course. Always do. Bye for now!

-   [React inline styles and media queries using a custom React Hook](https://medium.com/@ttennant/react-inline-styles-and-media-queries-using-a-custom-react-hook-e76fa9ec89f6)

-   [Use document and window with Gatsby](https://medium.com/@Jense5_/use-document-and-window-with-gatsby-e9a92ee31f36)

-   [browser-monads on npm.js](https://www.npmjs.com/package/browser-monads)

-   [Debugging HTML Builds](https://www.gatsbyjs.org/docs/debugging-html-builds/)
