---
title: Github automated security fixes (beta)
date: 2019-07-30T01:19:16.834Z
description: >-
  In this episode, I talk about what are Github automated security fixes and how
  they work.  Having yet another source to fix the vulnerabilities in your code
  is a good thing. If you know of any automated security tools for open source
  software that you would like to share with me, feel free to ping me on Twitter
  @letsbsocial1.
image: /img/daniel-plan-kfq0kjskcx8-unsplash.jpg
tags:
  - code-vulnerabilities
  - open-source-software
  - security-tools
  - vulnerability-fixes
  - automated-security-fixes
  - github
categories:
  - security
  - open-source-software
  - github
author: Maria D. Campbell
---
- [Link to Github automated security fixes (beta) podcast on anchorfm](https://anchor.fm/maria-campbell/episodes/Github-automated-security-fixes-beta-e4peal)

I thought it was so cool when I stumbled across [Snyk](https://snyk.io/), a tool which "enables developers to automatically find and fix open source vulnerabilities". However, given that we encounter myriad vulnerabilities we have to fix each day, the monthly free tier of this tool could potentially run out very quickly. And the next tier is horribly expensive, especially for individual developers. $599/month! Forget about it! I took my chances with the free tier.

Well, guess what? Now [Github](https://github.com/) has introduced something called **"Automated security fixes"**.  

How does [Github's](https://github.com/) automated security fixes (in beta) work? 

First of all, **public repositories** receive **security alerts** by ***default***. In order for **private repositories** to receive ***security alerts***, the owner or admin of the repository must **manually enable** the **dependency graph** and **security alerts** in the ***repository***. 

The ***languages*** that the **dependency graph** ***supports*** are **Java**, **JavaScript**, **.NET**, **Python**, and **Ruby**. To learn more, please visit the [Github](https://github.com/) article entitled [Listing the packages that a repository depends on](https://help.github.com/en/articles/listing-the-packages-that-a-repository-depends-on).

[Github](https://github.com/) ***does*** **state**,

>GitHub's security features, such as security alerts, do not claim to catch all vulnerabilities. Though we are always trying to update our vulnerability database and alert you with our most up-to-date information, we will not be able to catch everything or alert you to known vulnerabilities within a guaranteed time frame. These features are not substitutes for human review of each dependency for potential vulnerabilities or any other issues, and we recommend consulting with a security service or conducting a thorough vulnerability review when necessary.

Having yet another source to fix the vulnerabilities in your code is a good thing. The more sources you can use the better. Those of us that use [Node.js](https://nodejs.org/en/) and [NPM (Node Package Manager)](https://www.npmjs.com/) know that we also have `npm audit` to check and fix known vulnerabilities in our code, and [Snyk](https://snyk.io/) has been doing this kind of thing for a while, so they are another good source to glean from. I am sure there are many other similar tools out there, but I mention these because I know about them and use them. If you know of any others and would like to share them with me, feel free to ping me on **Twitter** [@letsbsocial1](https://twitter.com/letsbsocial1). That's **letsbsocial1**. And then there are always **developers** or **services** specializing in ***security*** that can **conduct** thorough **vulnerability code reviews** as well.

I will be **embedding** this ***episode*** of **Plugging in The Holes** along with a ***transcript*** in the form of a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your ***hearing*** and ***reading*** pleasure. I will be including the related resource links mentioned in the podcast of course. Always do. Bye for now!

- [Configuring automated security fixes](https://help.github.com/en/articles/configuring-automated-security-fixes)

- [Listing the packages that a repository depends on](https://help.github.com/en/articles/listing-the-packages-that-a-repository-depends-on)

- [About security alerts for vulnerable dependencies](https://help.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies)


