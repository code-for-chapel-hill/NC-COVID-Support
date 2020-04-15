# NC COVID Community Support Project
# Created by the Chapel Hill Brigade of Code for America

## This project is:
* A mobile-friendly website with an interactive map and table of local resources.
* A tool to help our communities and neighbors navigate the COVID crisis.
* A collaborative effort connected to local officials and support organizations.
* An open project that can be quickly adapted to other locations & future needs.

## The types of resource questions we want to answer:
* Where can I find a free meal?
* Where can I find free diapers/toilet paper/personal care items?
* Where can I find a drive-up pharmacy?
* Where can I find a market with senior/vulnerable shopping hours?
* Where can I find a pet store with a drive-up option?
* Which businesses offer discounts for medical workers?

## Authors
This project was initiated by [Code for Chapel Hill](http://www.codeforchapelhill.com/) with input from our local town and county officials.

## Frontend Packages Used

VueJS - The Progressive JavaScript Framework - https://vuejs.org/

Vue I18n - Internationalization Plugin - https://kazupon.github.io/vue-i18n/

Vue Leaflet - Mapping - ( Version of Leaflet that works with VueJS ) - https://vue2-leaflet.netlify.com/ 

BootstrapVue - Responsive Layout - ( Version of Bootstrap that works well with VueJS ) - https://bootstrap-vue.js.org/

## Development Machine Prerequisites 

### Frontend requirements:

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

### Backend Requirements

Currently not applicable for this solution as it's currently all front end code.

### Visual Studio Setup (Optional)
If you use Visual Studio it has its own version of NodeJS which will be quite out of date, you can easily set it up to use your default version by adding it's location in the options here:

`Options > Projects and Solutions > Web Package Management > External Web Tools`

You will need to add: `C:\Program Files\nodejs` and then move it to the top of the list so that it's chosen above the current default.

### VS Code Setup (Optional)
If you use Visual Studio code I recommend installing the following plugins:

* ESLint
* Prettier - Code formatter

A good blog post explaining how to set this up can be found here:

[Setting up Prettier on VS Code](https://travishorn.com/setting-up-prettier-on-vs-code-1fd5e5a43523)

We are using Prettier to maintain a common code format between developers, a check is run against the solution on every commit or Pull request, please ensure your code passes the Prettier tests before submitting a PR :)

## Solution Structure

### 1) covid-19-support
This is currently the only project folder in the solution, if you are not using Visual Studio, just open this folder.

## Getting started

### Getting the master branch to build

#### Download the source code
Follow the instructions above for setting up your environment, fork this project into your own GitHub repo, then using your favourite GIT client clone your new repository to a folder on your machine, then from a command or terminal window, navigate to the 'src' folder and run **`npm install`** to download the dependencies. 

#### Build the client side project using the Development Mode
Once completed. you can run **`npm run serve'** to build the solution and for a development web server to start and automatically open the main Index.html page, if you make any changes to the client side files the website running in your browser should automatically update.

### Branch before you start making changes
Please create clean branches from the Master branch before you start working on any changes, this will help ensure your code merges in cleanly to the main repository. If you are working on one of the GitHub issues, please name your branch using the following format: **`Issue-XX-Short-Description`**

#### Where do I put things?

The `/covid-19-support` directory is where all the client side development files go:

```
/ dist -- The compiled files ready to deploy onto a web server
/ node_modules -- The Node JS package repository folder
/ public -- The source Index.html file and any non-compiled files like Robots.txt / Favicon.ico etc.
/ src
    / components -- ( This is where we put VueJS Single File Components )
    / locales -- The i18n Translation files       
```

## How to contribute your changes back into the core project
#### Clean up your code
Before trying to submit a pull request ( to merge your code changes back into the main project ) please run the following command to ensure your code has been re-formatted to follow the Prettier code style rules: **`npm run format`** as mentioned above.

#### Commit your code to your LOCAL repository
Commit your changes back to your local repository, at this stage do NOT push the changes back to GitHub!

#### Check your master branch is still up to date
You need to make sure your master branch is still up to date and that your branch will still merge cleanly, in case other changes have happened to the main repository before you finished your changes. If you don't know how to add a second source repository to your Git client, you should be able to find this out by doing a quick web search.

#### Rebase your branch (if needed)
Assuming you have added the main project as a secondary source, if you do a fetch, you will see if the main master is the same as your local version, if not, the best thing to do is to Rebase your branch on the main master branch, which doing this, you will need to fix any conflicts that occur.

#### Double check everything still works
Once complete, check that your project still runs and your changes are working, re-run the **`npm run format`** command and commit your changes, you are now read to push your code up!

#### Push your code up to GitHub
Now you have made sure your branch is up to date you should be able to push your changes from your local repository up to your GitHub repository.

#### Pull Request Time!
You've made it, the final step, you just need to jump onto GitHub and submit a pull request, please tag the Issue number with a comment like " this should close issue #xxxx " as this will automatically close the issue when your pull request is successfully merged.
