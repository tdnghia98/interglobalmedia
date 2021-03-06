---
title: 'Adapting your gatsby site to the limitations of gatsby-image'
image: /img/nathan-dumlao-553945-unsplash.jpg
description: 'Adapting your gatsby site to the limitations of gatsby-image.'
date: '2019-06-01'
tags: ['site-performance', 'lighthouse-audits', 'gatsby-image', 'gatsbyjs']
categories: ['image-optimization']
author: 'Maria D. Campbell'
---

Among other things, I am a digital photographer. I love photos, and I love using
imagery on my web sites. In fact, that is the primary reason I originally
decided to switch this site and my
[developer blog](https://www.mariadcampbell.com/) over to
[Gatsbyjs](https://www.gatsbyjs.org/). Ever since I discovered
[unsplash](https://unsplash.com/), I love adding images from there to my posts.
I also loved adding **screenshots** of my **_projects_** to my **portfolio
section** here. Lastly, I **_added_** **unsplash photos** to my (new)
**ServicesCarousel** on the **home page**, and **_individual photos_**
expressing **each service** on the **_individual_** **service pages**.

Initially, I started with only adding (single) photos to blog posts, thumbnails
on the blog (list) page, one photo per project on the portfolio (project list)
page, and one photo per single project page. In addition, I did not optimize any
of my portfolio related images with
[gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/). Only my blog
post images were optimized. Then I audited my site with Google's
[Lighthouse](https://developers.google.com/web/tools/lighthouse/), an

> automated tool for improving the quality of web pages.

My SEO rating was excellent, my best practices rating was excellent, my
accessibility rating was OK, and my site performance was pretty good. But I
wanted to improve upon the site performance, especially related to site
optimization. I knew that I was going to add more projects and therefore more
photos to the portfolio section, so optimizing all images on the site became a
priority.

Meanwhile I did some refactoring to my site. I didn't want to have mostly text
on the home page, and I wanted to make it more dynamic. I decided to add a
slider visualizing each type of service the company offers. First I added a
React slider I had created myself. However, given how it was set up, I couldn't
add [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/) to it for
image optimization. The image payload was VERY expensive. When landing on the
home page, I couldn't navigate anywhere until ALL the **images** in the
**slider**, the **FeaturedProjects**, and **FeaturedPosts** had loaded. And that
took some time to happen. On top of that, I was working in a sub-optimal
internet connection environment. Very slow, and worsened by very bad weather
conditions. That's when I realized how critical it was to add
[gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/) **_somehow_**
everywhere.

That meant **_major refactoring_** of the site.

1. Just because it was **_really cool_** to use `props.location` and the `state`
   **prop** to create my **Portfolio page**, it did not mean that it was the
   best approach when it came to image optimization. In fact, it was probably
   the **_worst_** approach. For the life of me, I couldn't figure out how to
   add [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/).

2. Just because I thought **_my_** image slider was the coolest and most
   beautiful ever and that I wanted to show it off to the world, did not mean
   that it was the best one to use when it came to **optimizing images** with
   the [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/) plugin. I
   had to find a better slider or carousel that would work well with
   [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/),
   stylistically customizable, and also get me to a finished product quickly.
   After much research, I found the right alternative for my use case. It's
   called
   [react-responsive-carousel](https://www.npmjs.com/package/react-responsive-carousel).
   It's worth checking out! If you are already familiar with
   [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/), you will
   immediately realize why it is such a good choice when you familiarize
   yourself with this npm package.

3. I also had to optimize the images in the **Portfolio** and **Posts** sections
   on the home page. These were separate components I had created specifically
   for the **Portfolio** and **Posts** sections on the home page, and therefore
   no images were optimized. This was not difficult to tackle, but it did take a
   bit of thinking to realize properly. I also wanted to make sure that the set
   up was completely modular, thereby making it possible to quickly and easily
   change the section data. I ended up creating **individual components** for
   **each post** and **each project**, and then **_adding them_** to the
   **existing** `FeaturedProjects.js` and `FeaturedPosts.js` components. The
   **_set up_** for the **styling** remained **_pretty much_** the same, inside
   `FeaturedProjects.js` or `FeaturedPosts.js`, with a **_minor tweak_** made in
   the **home page** (index.js). I then **_created_** **data files** for **each
   project** and **post** component. Projects data reside under a projects
   folder in the data directory, and posts data reside in a posts folder in the
   data directory. Later, if I wanted to **_change_** the **projects** or
   **posts** I **_feature_** on the **home page**, it's just a matter of
   **_changing_** the **data**. It's as simple as that! Initially it might take
   time to set everything up properly, but in the long run, it saves a lot of
   time and energy!

4. I wanted to **_make sure_** that the **individual services** sections had
   **optimized images** as well. I created a **_page per service_**. For the
   **Full Stack JavaScript Services** section a **page**. For the **Development
   Workflows Services** section a **page**, for the **Git For Developers
   Services** section a **page**, for the **Git For Non-Developers Services**
   section a **page**, and for the **Command Line Services** section a page.
   Then I

```jsx
import Img from 'gatsby-image'
```

I also

```jsx
import {Link, graphql} from 'gatsby'
```

I used `graphql` to query the image data for
[gatsby-image's](https://www.gatsbyjs.org/packages/gatsby-image/) `Image`
component, and passed the
[props object](https://reactjs.org/docs/components-and-props.html) to access
that data. For me, that is the **_best preactices_** approach to accessing data
in a **_page_**. Note: I found out that either `Img` or `Image` can be used as
the name for the [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/)
**image** component. I originally had been using `Img` in my **_pages_**, and
kept it that way. But for whatever reason, in the `Bio` component of the
**Gatsby** **_default starter theme_**, `Image` was used, so I have continued to
use `Image` for the
[gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/) component in
**_components_**. I like this approach because it **_differentiates_** my use of
[gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/) between
**_components_** and **_pages_**. For example, in the `dev-workflows.js` page, I
created the following query with `graphql`:

```js
export const query = graphql`
    query workflowQuery {
        workflowImage: file(
            relativePath: {eq: "martin-w-kirst-1175656-unsplash.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`
```

To **_access_** the **data** via `props`, I did the following in the body of the
dev-workflows page (pages/dev-workflows/index.js):

```jsx
const DevWorkFlows = props => {
    const {data} = props
    return (
        <Img
            fluid={props.data.cliImage.childImageSharp.fluid}
            style={{marginBottom: '1.5rem'}}
            alt={devFlowStrats.title}
        />
    )
}
```

This was the approach to
[gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/) I used in my
pages. However, this **approach** does NOT work in **components**.

In my components, I used [Gatsbyjs'](https://www.gatsbyjs.org/) `StaticQuery`.
For example, in my `FeaturedPost1.js` component, I imported the following at the
top of the file:

```jsx
import {Link, StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import featuredPost1Data from '../../data/posts/featured-post-1'
```

Then using `StaticQuery`,

```jsx
const FeaturedPost1 = () => {
    return (
        <StaticQuery
            query={featuredPost1Query}
            render={data => {
                return (
                    <li>
                        <a href={featuredPost1Data.path} target="_new">
                            {featuredPost1Data.title}
                        </a>
                        <Image
                            fluid={data.postImageOne.childImageSharp.fluid}
                            alt={featuredPost1Data.title}
                        />
                        {featuredPost1Data.excerpt} ...
                        <br />
                        <Link to="/tags">
                            <span>tagged in:</span>
                        </Link>{' '}
                        {featuredPost1Data.tagNames}
                        <br />
                        <Link to="/categories">
                            <span>categorized under:</span>
                        </Link>{' '}
                        {featuredPost1Data.catNames}
                    </li>
                )
            }}
        />
    )
}

export default FeaturedPost1
```

And lastly, querying the data using `graphql`,

```js
export const featuredPost1Query = graphql`
    query featuredPost1Query {
        postImageOne: file(
            relativePath: {eq: "fredy-jacob-764477-unsplash.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
```

There are **_3 other areas_** I still need to address on the site in order that
**image optimization** is complete.

1. The images used in the `WFLiveSites.js` component for the **dev-workflows**
   page.

2. The images used in the `FSJSLiveSites` component for the **fsjs** page.

3. The images used in the `portfolio (pages/portfolio/index.js)` page and the
   `portfolio-view.js` page. This section will have to be completely refactored.

What did I learn from this experience? In order to be able to optimize all
images on a [Gatsbyjs](https://www.gatsbyjs.org/) site, one has to adapt the
site creation to the limitations of the
[gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/) plugin and not
the other way around.

The same goes for **accessibility**. I will be **addressing** that **_next_**
and will write about **_that_** in my next post.

## Related Resources:

-   [Lighthouse](https://developers.google.com/web/tools/lighthouse/)

-   [Gatsbyjs](https://www.gatsbyjs.org/)

-   [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/)
