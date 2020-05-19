# Contributing to NC COVID Support

Created by [Code for Chapel Hill](http://www.codeforchapelhill.com/) part of [Code for America](https://www.codeforamerica.org/)

## Introduction

Thank you for your interest in contributing to the [NC COVID Support](https://www.nccovidsupport.org) website, we really appreciate any help we can get to improve the site for all those who use it. 👍

The following is a set of guidelines, to help you contribute to the NC COVID Support project. Use your best judgement, and feel free to propose changes to this document in a pull request.

We are a friendly group and are happy with whatever contributions you might be able to make.

## Code of conduct

This project and everyone participating in it, is governed by our [Code of Conduct](code_of_conduct.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [contact@nccovidsupport.org](mailto:contact@nccovidsupport.org).

## Table of contents

[Contributing code changes](#contributing-code-changes)

- [Guidelines for contributions we welcome](#guidelines-for-contributions-we-welcome)
- [New developers and good first issues](#new-developers-and-good-first-issues)
- [How to begin](#how-to-begin)
- [Pull requests](#pull-requests)

[Reviews](#reviews)

- [Our current PR process](#our-current-pr-process)
- [Making changes after the PR is open](#making-changes-after-the-pr-is-open)
- [Keeping your NC COVID Support fork in sync with the main repository](#keeping-your-nc-covid-support-fork-in-sync-with-the-main-repository)
- [Style guidelines](#style-guidelines)

[How to get started with our code](#How-to-get-started-with-our-code)

- [Frontend packages used](#frontend-packages-used)
- [Development machine requirements](#development-machine-requirements)
- [Visual Studio Setup (Optional)](#visual-studio-setup-optional)
- [VS Code Setup (Optional)](#vs-code-setup-optional)
- [Prettier Code Style](#prettier-code-style)

[Getting started](#getting-started)

- [Download the source code](#download-the-source-code)
- [Build the client side project using the Development Mode](#build-the-client-side-project-using-the-development-mode)
- [Where do I put things](#where-do-i-put-things)

[Other ways to contribute](#other-ways-to-contribute)

## Contributing code changes

This document gives you a quick overview on how to get started.

### Guidelines for contributions we welcome

Not all changes are wanted, so on occasion we might close a PR without merging it. We will give you feedback why we can't accept your changes and we'll be nice about it, thanking you for spending your valuable time.

Make sure to talk to us before making large changes, so we can ensure that you don't put all your hard work into something we would not be able to merge.

Remember, it is always worth working on an issue from the [`Up for grabs`](https://github.com/code-for-chapel-hill/NC-COVID-Support/labels/Up%20for%20grabs) list or even asking for some feedback before you send us a PR. This way, your PR will not be closed as unwanted.

### New developers and good first issues

If you are a new developer or simply looking for an easy first ticket to work on, try taking a look at any tickets with the [`good first issue`](https://github.com/code-for-chapel-hill/NC-COVID-Support/labels/good%20first%20issue) label.

### How to begin

The short version goes like this:

- **Fork** - create a fork of [`NC-COVID-SUPPORT` on GitHub](https://github.com/code-for-chapel-hill/NC-COVID-Support)

  ![Fork the repository](/covid-19-support/src/images/Fork.png)

- **Clone** - when GitHub has created your fork, you can clone it in your favorite Git tool

- **Switch to the correct branch** - switch to the `master` branch

- **Build** - build your fork of NC COVID Support locally as described in [Getting started](#Getting-started)

- **Create a new branch** - it would help us if you can always name your branch after the issue you're fixing and follow the format: `issue-12345`. In this case you would be working on issue `12345`.

- **Change** - make your changes, fix a bug 🐛, add a feature 🆕, correct our spelling 🤦‍♂️, and don't be afraid to break something. We welcome all contributions and will [happily give feedback](#questions)

- **Commit** - done? Yay! 🎉 **Important:** Don't commit to the `master` branch, make sure you have created a new branch as mentioned above.

- **Push** - great, now you can push the changes up to your fork on GitHub

- **Create a pull request** - you're ready to send us your changes. GitHub will have picked up on the new branch you've just pushed and will offer to create a [Pull Request](#pull-requests). Click that green button and away you go.

![Create a pull request](/covid-19-support/src/images/createpullrequest.png)

    Note: If you just need some feedback to progress - you can make use of GitHub's draft pull request status, detailed [here](https://github.blog/2019-02-14-introducing-draft-pull-requests/))

### Pull requests

The most successful pull requests usually look like this:

- Fill in the required template (shown when starting a PR on GitHub), and link your pull request to an issue on our [issue tracker,](https://github.com/code-for-chapel-hill/NC-COVID-Support/issues) if applicable.
- Include screenshots and animated GIFs in your pull request whenever possible to highlight what you have changed.
- Ensure you have run [Prettier](#prettier-code-style) against your code

Again, these are guidelines, not strict requirements. However, the more information that you give to us, the more we have to work with when considering your contributions. Good documentation of a pull request can really speed up the time it takes to review and merge your work!

## Reviews

You've sent us your first contribution - congratulations! Now what?

We can now start reviewing your proposed changes and give you feedback on them. If it's not perfect, we'll either fix up what we need or we may request that you make some additional changes.

### Our current PR process

- Your PR will get a reply within 24 hours
- An in-depth reply will be added within 72 hours
- The PR will be either merged or rejected within at most 1 week
- Sometimes it is difficult to meet these timelines and we'll talk to you if this is the case.

### Making changes after the PR is open

If you make changes to your PR, please push them to the same branch in your fork again, the pull request automatically updates with the additional commit(s) so we can review it again. If all is well, we'll merge the code :)

### Keeping your NC COVID Support fork in sync with the main repository

We recommend you sync with our repository before you submit your pull request. That way, you can fix any potential merge conflicts and make our lives a little bit easier.

If you have submitted a pull request weeks ago and want to work on something new, make sure you have got the latest code to build against.

To sync your fork with the original one, you'll have to add the upstream url. You only have to do this once:

```
git remote add upstream https://github.com/code-for-chapel-hill/NC-COVID-Support.git
```

Then when you want to get the changes from the main repository:

```
git fetch upstream
git rebase upstream/master
```

In this command we're syncing with the `master` branch, but you can of course choose another one if needed.

(More info on how this works: [http://robots.thoughtbot.com/post/5133345960/keeping-a-git-fork-updated](http://robots.thoughtbot.com/post/5133345960/keeping-a-git-fork-updated))

### Style guidelines

We are using [Prettier](https://prettier.io) to maintain a common code format between developers, you can find out more details in our [Prettier code style](#prettier-code-style) section below.

## How to get started with our code

This section details how to setup your local development environment and talks about the technologies we have used in the project.

### Frontend packages used

VueJS - The Progressive JavaScript Framework - https://vuejs.org/

Vue I18n - Internationalization Plugin - https://kazupon.github.io/vue-i18n/

Vue Leaflet - Mapping - ( Version of Leaflet that works with VueJS ) - https://vue2-leaflet.netlify.com/

BootstrapVue - Responsive Layout - ( Version of Bootstrap that works well with VueJS ) - https://bootstrap-vue.js.org/

### Development machine requirements

#### NodeJS

Make sure you have the latest stable version of NodeJS ( Currently 12.16.1 ) it can be downloaded from here: https://nodejs.org/en/

Once installed you can check at the command line using:

`node --version`

#### NPM

You should also have version 6.14.3 of NPM, again you can check this using the following command:

`npm --version`

If you need to update the NPM version on Windows, use the accepted instructions found here:

[Stack Overflow - How can I update npm on windows](https://stackoverflow.com/questions/18412129/how-can-i-update-npm-on-windows)

Which for reference are:

Open a Powershell window with "Run as Administrator" then use the following three commands:

```
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
npm install -g npm-windows-upgrade
npm-windows-upgrade
```

#### Backend Requirements

Currently not applicable for this solution as it's currently all front end code.

### Visual Studio Setup (Optional)

If you use Visual Studio it has its own version of NodeJS which will be quite out of date, you can easily set it up to use your default version by adding it's location in the options here:

`Options > Projects and Solutions > Web Package Management > External Web Tools`

You will need to add: `C:\Program Files\nodejs` and then move it to the top of the list so that it's chosen above the current default.

### VS Code Setup (Optional)

If you use Visual Studio code I recommend installing the following plugins:

- ESLint
- Prettier - Code formatter

A good blog post explaining how to set this up can be found here:

[Setting up Prettier on VS Code](https://travishorn.com/setting-up-prettier-on-vs-code-1fd5e5a43523)

### Prettier Code Style

We are using [Prettier](https://prettier.io) to maintain a common code format between developers, a check is run against the solution on every Pull request, please ensure your code passes the Prettier tests before submitting a PR.

A simple way to do this is to run the command line command:

`npm run format`

## Getting started

### Download the source code

Follow the instructions above for setting up your environment, forking and cloning the project, then from a command or terminal window, navigate to the 'src' folder and run **`npm install`** to download the dependencies.

### Build the client side project using the Development Mode

Once completed. you can run **`npm run serve'** to build the solution and for a development web server to start and automatically open the main Index.html page, if you make any changes to the client side files the website running in your browser should automatically update.

### Where do I put things

The `/covid-19-support` directory is where all the client side development files go:

```
/ dist -- The compiled files ready to deploy onto a web server
/ node_modules -- The Node JS package repository folder
/ public -- The source Index.html file and any non-compiled files like Robots.txt / Favicon.ico etc.
/ src
    / components -- This is where we put VueJS Single File Components
    / images -- These should be images that are generic and used across ALL skinned versions of the NC Covid Support site
    / locales -- The i18n Translation files
    / scss - The main SCSS files
    / themes - This is where all Theme specific code and media should exist
        / NCCovidSupport - The main NC Covid Support theme
            / images - Any images used by this theme
            / scss - Any theme SCSS
/ tests - All code tests
    / unit - Our unit tests
    / e2e - Any end to end tests
/ docs - All the documentation files used to drive the GitHub pages documentation    
```

## Other ways to contribute

We welcome all kinds of contributions to our repository. If you don't feel you'd like to make code changes you can use your experience to improving this documentation, or you can join our [content editing team](content-editors.md) to help add more content to the [NC COVID Support](https://nccovidsupport.org) site.

We also encourage you to feel free to comment on others' pull requests and issues. If you see something on our [issue tracker](https://github.com/code-for-chapel-hill/NC-COVID-Support/issues) or [pull requests](https://github.com/code-for-chapel-hill/NC-COVID-Support/pulls) you feel you can add to, please don't be shy.
