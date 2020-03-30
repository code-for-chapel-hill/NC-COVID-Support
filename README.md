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

https://stackoverflow.com/questions/18412129/how-can-i-update-npm-on-windows

Which for reference are:

Open a Powershell window with "Run as Administrator" then use the following three commands:

```
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
npm install -g npm-windows-upgrade
npm-windows-upgrade
```

### Backend Requirements

Currently not applicable for this solution as it's currently all front end code.

### Visual Studio Setup
If you use Visual Studio it has its own version of NodeJS which will be quite out of date, you can easily set it up to use your default version by adding it's location in the options here:

`Options > Projects and Solutions > Web Package Management > External Web Tools`

You will need to add: `C:\Program Files\nodejs` and then move it to the top of the list so that it's chosen above the current default.

## Solution Structure

### 1) covid-19-support
This is currently the only project folder in the solution, if you are not using Visual Studio, just open this folder.

## Getting started

#### Download the source code
Follow the instructions above for setting up your environment, then using your favourite GIT client clone this repository to a folder on your machine, then from a command or terminal window, navigate to the 'src' folder and run **`npm install`** to download the dependencies. 

#### Build the client side project using the Development Mode
Once completed. you can run **`npm run serve'** to build the solution and for a development web server to start and automatically open the main Index.html page, if you make any changes to the client side files the website running in your browser should automatically update.


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
