---
title: >-
    Forking A Repository on Github and Subsequently Creating a Pull Request on
    the Original Repository
date: 2020-03-12T03:18:22.912Z
description: >-
    n this episode, I talk about forking a repository on Github and subsequently
    creating a pull request on the original repository.
image: /img/paolo-chiabrando-dmgv2jjshdo-unsplash.jpg
tags:
    - git
    - forking
categories:
    - git
author: Maria D. Campbell
---

-   Link to
    [Forking A Repository on Github and Subsequently Creating a Pull Request on the Original Repository](https://anchor.fm/maria-campbell/episodes/Forking-A-Repository-on-Github-and-Subsequently-Creating-a-Pull-Request-on-the-Original-Repository-ebeo5d)
    podcast on anchorfm

I little while ago I went over a student's homework project, and I noticed a
small error in her html. Since I am also teaching my students **Git**, I decided
that I would **_add_** the experience of forking repositories and subsequent
pull requests on the original repos. After all, that is at the center of **Git**
collaboration.

-   First, I had to **_fork_** her repository. I went to the repository in
    question, and clicked on the fork button to the right of the star button. I
    wanted to be able to make slight changes where necessary to her repository,
    but most of all, I wanted her to gain exposure to merging pull requests. And
    perhaps even forking (**open source**) repositories herself.

Whenever I fork a repository, my goal is to be able to make `pull requests` and
offer suggested changes to the original source code. In other words, "propose
changes to the upstream", aka "original" repository. Don't we all? And where
does this all take place? Via the `Command Line` (Terminal) of course! And
sometimes, especially in the cases of _**proposing changes**_ to **open source**
repositories that you may be interested in or even depend on, it is also a good
idea to regularly sync your fork with the `upstream` repository.

![Forking a repository](/img/fork.png)

-   Next, I needed to **create** a `clone` locally on my laptop. First I go to
    my `fork` I have created of my student's repository, copied the url of the
    repository residing inside the "Clone or download" button, and then I
    `git clone url` it using `SSH` (that is what I am set up for on Github) in
    `Terminal`.

```shell
git clone https://github.com/YOUR-USERNAME/name-of-original-repo.git
```

If you are using `https` or

```shell
git clone git@github.com:YOUR-USERNAME/name-of-original-repo.git
```

If you are using `SSH`. Now you have your _**copy**_ of the **repository** you
have _**forked**_ locally on your computer.

-   Next I want to _**configure**_ **Git** to _**sync**_ my `fork` with the
    _**original repository**_ I forked.

    -   First I go back to the repository I forked.
    -   Under the repository name, again I click the "clone or download" button
        and copy the url inside, choosing `HTTPS` or `SSH`.
    -   Next I go back into `Terminal`. I cd into the `root` of my `local copy`
        of the forked repository.
    -   Then I execute the command `git remote -v`. It shows me the link
        associated with the `git fetch` and `git push` commands on `origin`. ->
        `git fetch (origin)` and `git push (origin)`.
    -   Then I execute the
        `git remote add upstream git@github.com:FORKED-USERNAME/name-of-original-repo.git`.
        This is very similar to
        `git remote add origin git@github.com:YOUR-USERNAME/name-of-original-repo.git`when
        preparing to `push` a new `local git repository` to `remote origin` for
        the **_first time_**. There we also **sync** our `remote repository`
        with our`local repository` via the `remote url` used for **cloning** as
        well.
    -   Next, I check to see whether my syncing took on `upstream`
        with`git remote -v` again. If `upstream` prints out to the
        `Terminal Console` for both `fetch` and `push` with the **_correct_**
        `urls`, then I know I was successful.

![git remote -v](/img/git-remote-v.png)

-   Now I can set up my `local repository` to be `synched` with the
    `upstream repository` on **Github** with a few more **Git** commands.
    -   First I make sure I am actually in the `local copy` of my `forked repo`.
    -   Then I execute the command `git fetch upstream`.
    -   If there were any **changes** made on `remote` that are _**not**_
        `reflected locally`, they will be _**fetched**_ from `upstream` into the
        `local copy` of the `forked repository`.
    -   Next I have to make sure I am `checked out` into the `master branch`. If
        there are no other branches in the forked repository, only a master
        branch, then I will _**already**_ be **there** as would be evidenced by
        the appearance of "master" in the `Terminal` window. But it is still not
        a bad idea to go through the paces of git checkout master. All that will
        happen then is that I would be informed that I am _**already**_ in the
        `master branch`.
    -   Next I need to `merge` the **changes** from `upstream/master` into my
        `local master branch`. This brings my fork's master branch into `sync`
        with the `upstream repository`, _**without losing**_ my **local
        changes**.

![git merge upstream/master](/img/git-merge-upstream-master.png)

```shell
git merge upstream/master
```

In fact, what I like to do is

```shell
git merge upstream/master --no-ff
```

because I _**don't like**_ to **fast-forward**. I like to see all commits
_**before**_ the `merge` (in case if there are any, and sometimes there are).
`--no-ff` means `no fast forward`.

-   If I want my local forked version to have the same changes as the original
    repository I forked, I can do a `git pull upstream [branch]` as I would with
    my own local repositories, just in those cases it would be `git pull` (
    don't need to do more because I execute git push -u origin master when I
    push a new local repository to remote for the first time). And then to
    `push` to my `forked repository` on `remote`, I would execute
    `git push origin [branch]`.
    -   I could also choose to do a `rebase`, but I like to avoid that if not
        necessary. I don't like to rewrite histories unless I have to.

And that it is it!

I will be embedding this episode of **Plugging in The Holes** along with a
_**transcript**_ in the form of a **post** on
[interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your
_**hearing**_ and _**reading**_ pleasure. I will be including the related
resource links mentioned in the podcast of course. Always do. Bye for now!

-   [Fork a repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
-   [Synching a Fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork)
-   [How To use Git and Github](https://github.community/t5/How-to-use-Git-and-GitHub/Update-a-forked-repository-when-the-original-repository-is/td-p/20980)
