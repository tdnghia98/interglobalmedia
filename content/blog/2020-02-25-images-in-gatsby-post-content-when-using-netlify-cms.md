---
title: Images in Gatsby Post Content when using Netlify CMS
date: 2020-02-25T20:08:03.938Z
description: >-
  I this episode, I talk about how to add images in the body of Gatsby markdown
  posts when using Netlify CMS.
image: /img/stanislav-kondratiev-123540-unsplash.jpg
tags:
  - netlify-cms
  - gatsbyjs
  - post-content-images
categories:
  - netlify-cms
  - gatsbyjs
author: Maria D. Campbell
---
* Link to [Images in Gatsby Post Content when using Netlify CMS](https://anchor.fm/maria-campbell/episodes/Images-in-Gatsby-Post-Content-when-using-Netlify-CMS-eb2l4o) podcast on anchorfm

Today I finally figured out how to _**add**_ **images** to the body of `Gatsby markdown posts` when using the `Netlify CMS`. It's easy, but _**not**_ intuitive. No one seems to ever talk about the process, but so many ask how it is done!

![Netlify CMS Backend Media Tab](/img/netlify-cms-backend-media.png)

After some trial and error, I finally found that all I had to do was _**first**_ **upload** the **image** to my `Netlify CMS` **backend** that I wanted to use in the body of a post. To do this, I _**click**_ on the `Media` **tab** in the `CMS backend`, and _**upload**_ a **new image**. 

![Netlify Static Image Deployment](/img/netlify-static-img-deploy.png)

Next I _**wait**_ for my `automated deploy(ment)` to complete. While that is happening, I _**add**_ the `image` via `markdown` in my either _**already**_ `published article`, or _**wait**_ till the `image deployment` has **completed**, **create** a _**new**_ **blog post** including the `path` to the `image` using `markdown` inside the `post content body`, and then `push` the `changes` to `Github master`. _**However**_, whichever way I do it, I have to _**make sure**_ to  `git pull` **changes** made _**first**_ on `remote Netlify CMS` _**before**_ **committing** and _**pushing**_ my `local changes`. And that is it! This is how I added an image to one of my posts:

```markdown
![Git File Large Storage](/img/git-large-file-storage.png)
```

What this is saying is that my `git-large-file-storage.png` **png** resides in an `img` **folder** inside of my `static` **folder**:

```
static/img/git-large-file-storage.png
```

But I _**don't**_ have to **add** the `static` **path**, because `Netlify CMS` knows to _**look**_ **inside** the `static` **folder** and _**retrieve**_ **blog post** `images` there. So the path is _**stating**_ that `Netlify CMS` can find this `image` _**inside**_ the `img` **folder** in the **parent** `static` **folder**. And that is it!

To view my `gatsby-config.js` and the **plugins** I use in my `package.json` file, please visit the:

* [interglobalmedia repository on Github(https://github.com/interglobalmedia/interglobalmedia)

I will be embedding this episode of **Plugging in The Holes** along with a _**transcript**_ in the form of a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your _**hearing**_ and _**reading**_ pleasure. I will be including the related resource links mentioned in the podcast of course. Always do. Bye for now!
