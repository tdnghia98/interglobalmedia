---
title: >-
  How to create a sticky footer when you originally didn't account for having
  one
date: 2020-01-09T14:42:16.300Z
description: >-
  In this episode, I discuss how I went about creating a sticky footer after
  having already built the basic infrastructure and code of my Message Me app.
image: /img/stanislav-kondratiev-123540-unsplash.jpg
tags:
  - sticky-footer
  - react
  - nodejs
  - graphql
  - mongodb
  - user-authentication
  - protected-routes
  - full-stack-development
categories:
  - react
  - full-stack-development
author: Maria D. Campbell
---
- Link to the [How to create a sticky footer when you originally didn't account for having one](https://anchor.fm/maria-campbell/episodes/How-to-create-a-sticky-footer-when-you-originally-didnt-account-for-having-one-ea2vpl) podcast on anchorfm

For the past couple of weeks I have been working on an app I am calling `Message Me`. I think it was partially in reaction to my ***utter*** **disappointment** and ***departure*** from **Facebook**. I wanted to create a simple, clean, message app with persistent data stored in a **NoSQL/MongoDB** database on the ***backend***, **GraphQL** ***API***, **Node.js** ***server***, and **React** ***frontend***.

I still have much more I want to add over time feature-wise, but the basic structure is complete.

I ran into a few ***challenges*** along the way, and one of them was figuring out how to create a **sticky footer** ***after*** already having completed the app structure. I hadn't been sure what I wanted to do with a footer and whether I even wanted a real one in the first place, so when I finally decided that I DID want one, I found that I would have to approach the sticky footer in a very different way from what I had done in the past.

Why? First of all, my `Layout` **component** was structured and utilized differently from other apps I had created. It was not straightforward. For example, in my high order `App` **component**, I wrap the `Layout` **component** only around the `header`, don't include the main body of the app (`<main></main>`) or the footer (`<footer></footer>`). The `return` **statement** looks like this:

```js
return (
    <Fragment>
        {this.state.showBackdrop && (
            <Backdrop onClick={this.backdropClickHandler} />
        )}
        <ErrorHandler error={this.state.errorHandler} onHandle={this.errorHandler} />
        <HeaderLayout
            header={
                <Toolbar>
                    <MainNavigation
                        onOpenMobileNav={this.mobileNavHandler.bind(this, true)}
                        onLogout={this.logoutHandler}
                        isAuth={this.state.isAuth}
                    />
                </Toolbar>
            }
            mobileNav={
                <MobileNavigation
                    open={this.state.showMobileNav}
                    mobile
                    onChooseItem={this.mobileNavHandler.bind(this, false)}
                    onLogout={this.logoutHandler}
                    isAuth={this.state.isAuth}
                />
            }
        />
        {routes}
    </Fragment>
)
```
And this is what my `Layout` **component** looked like:

```js
import React, {Fragment} from 'react'
import './Layout.scss'
import Footer from '../../Footer/Footer';

const Layout = props => (
    <Fragment>
        <div className='Site'>
            <header className='main-header'>{props.header}</header>
            {props.mobileNav}
            <main className='Site-content'>
                <div className='content'>
                    {props.children}
                </div>
            </main>
        </div>
    </Fragment>
)
export default Layout
```
All code in `App.js` is related to user sign up and log in. This is because of the existence of ***user authentication*** for the purpose of ***protecting routes*** so ***unauthenticated*** **users** can't access them. In order to be able to protect any given routes, it has to be done at the ***highest*** **level**, and that is `App.js`. That means the main content is not included and the footer would not be included if it did not contain authentication routes which needed protection.

At first I tried to approach things the way I would with a simple website with no authentication involved. When I had created websites using views and authentication created with `EJS`, `Handlebars`, or `Pug`, for example, I didn't have this problem, because those **routes** are ***structured*** **differently**. So I first did what I already was familiar with. I take that approach with development workflows as well and **refactor** what needs ***refactoring*** as I go along. `React`, and `create-react-app`, is great about letting you know what needs to be ***fixed***. The `Terminal` AND `browser console`, such as `Google Chrome DevTools`, should be your ***best*** **friends**.

Suffice it to say, ***adding*** a `Footer` **component** to my `Layout` **component** and ***accompanying*** `sticky footer styling` ***adapted*** from **Philip Walton**, ***creator*** of `Flexbox`, in an `SCSS` stylesheet (`./styles/styles.scss`) in the `src` **directory** of the **project** did NOT work. ***Adding*** the **styles** to a `Layout.scss` file also did not work. Etc.

I took another overall look at what was going on ***structurally*** with the **site**. I did not want to ***completely*** **refactor** the `structure`. That would have been ***nasty*** and not necessarily successful. There had to be another way of fixing the issue. There was, and the answer stared me straight in the face in `App.js`!

I decided to ***split*** my `Layout.js` in **two**. I created a `HeaderLayout.js` and a `MainLayout.js`. I imported the `HeaderLayout.js` into `App.js`, with no need to do any refactoring whatsoever there. Everything else remained the same. In `HeaderLayout.scss`, I imported the `.main-header` **className** which was present in the ***original*** `Layout.scss.`

**Implementation** of `MainLayout.js` was a bit more ***extensive***. I had to `import` it into ***individual*** **pages**. I had to import it into my **Feed** page `Feed.js`, my **Single Message** page `SingleMessage.js`,  the **Signup** page `Signup.js`, and the **Login** page `Login.js`. This is how the `Login.js` code looked like after I imported `MainLayout.js`:

```js
import React, { Component } from 'react'

import Input from '../../components/Form/Input/Input'
import Button from '../../components/Button/Button'
import { required, length, email } from '../../util/validators'
import Auth from './Auth'

class Login extends Component {
    state = {
        loginForm: {
            email: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, email]
            },
            password: {
                value: '',
                valid: false,
                validators: [required, length({ min: 5 })]
            },
            formIsValid: false
        }
    }

    inputChangeHandler = (input, value) => {
        this.setState(prevState => {
            let isValid = true;
            for (const validator of prevState.loginForm[input].validators) {
                isValid = isValid && validator(value);
            }
            const updatedForm = {
                ...prevState.loginForm,
                [input]: {
                    ...prevState.loginForm[input],
                    valid: isValid,
                    value: value
                }
            };
            let formIsValid = true;
            for (const inputName in updatedForm) {
                formIsValid = formIsValid && updatedForm[inputName].valid;
            }
            return {
                loginForm: updatedForm,
                formIsValid: formIsValid
            };
        });
    };

    inputBlurHandler = input => {
        this.setState(prevState => {
            return {
                loginForm: {
                    ...prevState.loginForm,
                    [input]: {
                        ...prevState.loginForm[input],
                        touched: true
                    }
                }
            };
        });
    };

    render() {
        return (
            <Auth>
                <form
                    onSubmit={e =>
                        this.props.onLogin(e, {
                            email: this.state.loginForm.email.value,
                            password: this.state.loginForm.password.value
                        })
                    }
                >
                    <Input
                        id='email'
                        label='Your E-Mail'
                        type='email'
                        control='input'
                        onChange={this.inputChangeHandler}
                        onBlur={this.inputBlurHandler.bind(this, 'email')}
                        value={this.state.loginForm['email'].value}
                        valid={this.state.loginForm['email'].valid}
                        touched={this.state.loginForm['email'].touched}
                    />
                    <Input
                        id='password'
                        label='password'
                        type='password'
                        control='input'
                        onChange={this.inputChangeHandler}
                        onBlur={this.inputBlurHandler.bind(this, 'password')}
                        value={this.state.loginForm['password'].value}
                        valid={this.state.loginForm['password'].valid}
                        touched={this.state.loginForm['password'].touched}
                    />
                    <Button design='raised' type='submit' loading={this.props.loading}>
                        Login
                    </Button>
                </form>
            </Auth>
        )
    }
}

export default Login;
```
I essentially did the ***same*** with the `Signup.js`, `Feed.js`, and `SingleMessage.js` pages.

And this is my famous sticky footer styling adapted from [Philip Walton](https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/), creator of `Flexbox`:

```scss
:root {
    --space: 1.5em 0;
    --space: 2em 0;
}
.Site {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.Site-content {
    flex: 1 0 auto;
    padding: var(--space) var(--space) 0;
    width: 100%;
}
.Site-content:after {
    content: '\00a0';
    display: block;
    margin-top: var(--space);
    height: 0;
    visibility: hidden;
}
```
I ***added*** the **sticky footer styling** to the ***highest order*** **stylesheet**, `index.scss`, so that it would ***affect*** any other **component** or **page** below it, ***including*** `App.js`. It is also the ***only*** `scss` file I had to `import` into `index.js`, because I use `scss` **modules** in this project. In other words, ***each*** **component** and **page** has its ***own*** `scss` **file** which ***only affects*** the **styles** of the `component` or `page` it is ***imported*** **into**.

And that was it! No need for any crazy refactoring of app structure or frontend code. I saved soooo much time, energy, and frustration. This could very well have been a real situation. What if a client or the company one works for had decided to make such a move, and there was a very limited time to implement the footer? This would be an ideal solution for such a scenario.

I will be embedding this episode of **Plugging in The Holes** along with a ***transcript*** in the form of a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your ***hearing*** and ***reading*** pleasure. In ***this*** **transcript**, I will be including the `code` **snippets** I mention throughout the podcast for your edification.  I will be including the related resource links mentioned in the podcast of course. Always do. Bye for now!

- [Sticky Foote](https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/)

- [Message Me app on Github](https://github.com/interglobalmedia/message-docs)

- [Evolution of Design And Development](https://interglobalmedia.github.io/evolution-in-design-and-development/#0)

- [Adding a CSS Modules Stylesheet](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)

- [Adding a Sass Stylesheet](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)




