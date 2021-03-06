---
title: Switching Shells on Mac OS Catalina
date: 2020-02-28T01:15:38.323Z
description: >-
    In this episode, I talk about why one should switch over to the ZShell from
    Bash if they has Mac OS Catalina installed on their machine.
image: /img/stanislav-kondratiev-123540-unsplash.jpg
tags:
    - bash
    - zsh
    - interactive-shell
    - osx
    - catalina
categories:
    - catalina
    - osx
    - interactive-shell
author: Maria D. Campbell
---

-   Link to
    [Switching Shells on Mac OS Catalina](https://anchor.fm/maria-campbell/episodes/Switching-Shells-on-Mac-OS-Catalina-eb4btl)
    podcast on anchorfm

I have been using `Zsh` for years now, but many people on Mac OS used the `Bash`
shell as the `default shell` for `Terminal`. Then **Mac OS Catalina** came along
and overturned everything. It switched the **_default shell_** to `Zsh`.

The reason why some people still have `Bash` set as their **_default shell_** in
`Catalina` is because `Zsh` is only set to the **_default shell_** on newly
created user accounts, so people who have been using **Mac OS** **_pre_**
`Catalina`, still have their **_default shell_** set to `Bash`.

If you are a long time **Mac OS** user **_prior_** to **Mac OS Catalina**, and
you haven't done anything to the `shell configuration`, then your **_default
shell_** is still `Bash`. But **Catalina** is **_pointing_** to `Zsh`. So how
can you **_switch_** to `Zsh`? It's pretty simple really. And you can **do it**
**_two ways_**. The **_first_** would be via the `Terminal` and the **_second_**
would be via `Users & Groups`.

**_Switching_** from `Bash` To `Zsh` from `Terminal` is as simple as
**_executing_** the following in `Terminal`:

```shell
chsh -s /bin/zsh
```

For those of you who may be **_new_** to the `Command Line` on **Mac OS**, you
can find it by going into your `Spotlight Search` (the magnifying glass icon in
top right corner of your computer screen to the right of your username) and
**type** the word "Terminal". When the `Terminal` **icon** appears, just
**_click_** on it, and it will launch. To launch `Spotlight Search` itself,
**press** the `command key` and then the `space bar`.

When you type this command in `Terminal` and then **hit** the `enter/return`
key, you will have to enter your system password. Then close out of the
`Terminal` window, and re-open it. You will now be on `Zsh`.

To check what **shell** you are using, type the following command in `Terminal`
and hit return:

```shell
echo $SHELL
```

In my case, it prints out the following in `Terminal`:

```shell
/bin/zsh
```

That means I am using `Zsh`.

If you have just executed `chsh -s /bin/zsh` in Terminal, then executing
`echo $SHELL` is a great idea to make sure you have been **_successfully
switched_** over to `Zsh`.

Just for the hell of it, I decided to **switch back** to `Bash` as my **_default
shell_** to see what happens, now that I am on **Catalina**. When I executed
`chsh -s /bin/bash`, I got the following afterwards in the `Terminal` window:

![Switching Shells from Bash to Zsh](/img/zsh-to-bash-catalina.png)

It's not the best idea to stay with `Bash`. The version of `Bash` that is
installed with `Mac OS/Catalina` has remained at `3.2` since `2007`. Make sure
to **_switch over_** to `Zsh`. Of course I immediately switched back to `Zsh`
with the command `chsh -s /bin/zsh`, made sure to exit out of that instance of
`Terminal` afterwards, and then re-open it. When I executed `echo $SHELL`,
`/bin/zsh` was printed out to `Terminal`.

If you are not a `Command Line` person, you could always go into **System
Preferences** and then the `Users and Groups` icon. **_However_**, it is a
longer and more tedious process. I would just **go with** **_using_** the
`Command Line`. I have included an article entitled
[What Shell Am I Using? Here’s How To Find Out](https://osxdaily.com/2009/09/25/what-shell-am-i-using/)
that can walk you through changing your default shell via Users and Groups, if
you absolutely insist on going that way.

<iframe width="560" height="315" src="https://www.youtube.com/embed/YwhdDMT_dFU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="Opening VS Code with a shell command from within a folder in Terminal" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/TisNvwkW1aI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="Opening VS Code via open folder
" allowfullscreen></iframe>

I will be embedding this episode of **Plugging in The Holes** along with a
**_transcript_** in the form of a **post** on
[interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your
**_hearing_** and **_reading_** pleasure. I will be including the related
resource links mentioned in the podcast of course. Always do. Bye for now!

## Related Resources:

-   [What Shell Am I Using? Here’s How To Find Out](https://osxdaily.com/2009/09/25/what-shell-am-i-using/)

-   [Moving From Bash to Zsh: Terminal Changes in macOS Catalina](https://blog.macsales.com/56921-moving-from-bash-to-zsh-terminal-changes-in-macos-catalina/)
