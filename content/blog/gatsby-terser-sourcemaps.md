---
title: 'Gatsby, terser, and source-maps'
image: /img/andrew-neel-1-29wyvvLJA-unsplash.jpg
description:
    'In this episode, I talk about how  during the past couple of days I have
    been working on adding a netlfiy-cms to my Gatsby site.'
date: '2019-07-09'
tags:
    [
        'npm-plugin-compatibility',
        'source-maps',
        'gatsbyjs',
        'netlify-cms',
        'gatsby-plugin-netlify-cms',
        'terser-npm-package',
    ]
categories: ['npm-plugin-compatibility']
author: 'Maria D. Campbell'
---

-   [Link to Gatsby, terser, and source-maps podcast on anchorfm](https://anchor.fm/maria-campbell/episodes/Gatsby--terser--and-source-maps-e4ip7k)

The past couple of days I have been working on adding a `netlify-cms` to my
**_Gatsby_** **site**. Not that I want it for myself necessarily, although it is
great to have an alternative when wanted or needed, but I want to make
**_blogging life_** as **easy** as possible for my clients.

I already host my **_Gatsby_** **sites** on **_Netlify_**, and highly recommend
it for my clients. However, out of the box, without certain tooling, they would
have to have a **Git repo** somewhere, link it to a **Netlify account**, and
then be able to **_update_** their **sites** via push to remote. That takes some
technical skill and therefore extra time on their part.

That's where **_Netlify_**'s **Git Gateway** comes in. It is a new **Netlify**
**_feature_** currently in beta, and adding it to the **Gatsby/Netlify**
**_toolbox_** means clients **don't need** to have either a **Github account**
(or any kind of **Git account**) or a **Netlify account**. And that is HUGE!

There have been a few bumps along the way due to certain incompatibilities which
had to be fixed. I have fixed the first round which makes it possible at least
**_locally_** to **access** the **CMS** via **_Github_**. Still working on that
and awaiting some answers. Same with **Git Gateway**. It will happen eventually,
but we're working with new updates and tooling, so the ride is always a bit
bumpy at first.

Gatsby devs! Apparently, there is an issue with the terser package, a new **peer
dependency** **_addition_** to **Gatsby** which has been causing **source-map**
**_hell_** on build.

For those using **_yarn_**, the "resolution" seems fairly simple. However,
depending on what other packages you are using, it might not work equally across
projects. This is the (temporary) fix if you are **_using_** **yarn**:

```json
"resolutions": {
  "terser": "4.0.0"
}
```

This should be added to your `package.json`. In other words, you install the
`terser` **package** **_version_** `4.0.0` as a dependency at the root of your
project, and then **_add_** the **above code** to your `package.json`.

This was nine days ago. The **_latest version_** of **terser** is `4.1.2` (at
least as of this morning), and I tried this one out. I thought it far enough
away from the troublesome version 4.0.1. Indeed, it has done the trick locally,
but I did things a bit differently, since I am using **_npm_**.

There IS an **npm version** of `resolutions` out there. It utilizes the **_npm
package_** `npm-force-resolutions`. I had to do the following in order to run a
**successful build** in my **_Gatsby project_**:

```shell
rm -rf node_modules
npx npm-force-resolutions
npm i
```

Then I ran

```shell
npm run build
```

This time my build was successful. I also commented out my **custom**
`webpack configs` related to `source-maps` in my `gatsby-node.js` file before
**_running_** the `build`. This was to ensure that the fix actually worked. And
it did … **_locally_**.

I will first be pushing my changes to a remote feature branch to see if the
**\*Netlify** `build` **passes**. If it does, then I will push it to `staging`
and then `master`, as long as it continues to pass muster.

**Note:** This `terser` "bug" has to be fixed. I don't consider the workaround
to be stable and will **_not_** be **adding** **Netlify CMS** to production
anywhere until it has been **fully fixed** **_without resolutions_**.

**Correction:** I did keep the following **custom webpack config** in
`gatsby-node.js` when I ran the (successful) build:

```js
// turn off sourcemaps in production build no longer works
exports.onCreateWebpackConfig = ({actions, stage}) => {
    // If production JavaScript and CSS build
    if (stage === 'build-javascript') {
        // Turn off source maps
        actions.setWebpackConfig({
            devtool: false,
        })
    }
}
```

Previously, on its own **_without_** the **resolution**, the **build** had
**_failed_**.

I will be **_embedding_** this **episode** of
[Plugging in The Holes](https://anchor.fm/maria-campbell/episodes/Gatsby--terser--and-source-maps-e4ip7k)
along with a **transcript** in the form of a **post** on
[interglobalmedianetwork.com](https://www.interglobalmedianetwork.com) for your
hearing and reading pleasure. I will be **_including_** the **related resource
links** mentioned in the podcast of course. Always do. Bye for now!

## Related Resources:

-   [New installs of Gatsby fail on builds with source-map error](https://github.com/gatsbyjs/gatsby/issues/15249)

-   [npm-force-resolutions repository on Github](https://github.com/rogeriochaves/npm-force-resolutions)
