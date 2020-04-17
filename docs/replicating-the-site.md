# Replicating the NC COVID Support project

Created by [Code for Chapel Hill](http://www.codeforchapelhill.com/) part of [Code for America](https://www.codeforamerica.org/)

## Introduction

Thank you for your interest in replicating the NC COVID Support project to enable you to create a new site for your own state / area.

## Code of conduct

This project and everyone participating in it, is governed by our [Code of Conduct](code_of_conduct.md). By cloning the project and working with us, you are expected to uphold this code. Please report unacceptable behavior to [contact@nccovidsupport.org](mailto:contact@nccovidsupport.org).

## Table of contents

[How to replicate the project](#how-to-replicate-the-project)

- [Get in touch](#get-in-touch)

[Project Structure](#project-structure)

- [Data source](#data-source)
- [Frontend Code](#frontend-code)

[Current Hosting](#current-hosting)

## How to replicate the project

Clearly you could just fork our project, copy the spreadsheet mentioned below and go on your merry way, but we hope that you would like to work together so that we can jointly continue to develop this project and both end up benefiting from all future development.

### Get in touch

Please do get in touch with us, we'd love to chat with you to discuss how we can best work together. From a technical perspective it's probably best to first chat with [Chris Houston](https://github.com/readingdancer) who is currently the lead developer on this project. You can contact Chris via the Code for America Slack channel or he can be found on Twitter as [readingdancer](https://www.twitter.com/readingdancer).

## Project Structure

Our site is currently a VueJS website (think frontend code) backed by JSON data that is pulled from a Google Spreadsheet.

### Data source - Google Spreadsheet

Our current data source for the site is a private Google Spreadsheet, the following link is a template that you can copy to ensure you have an identically structured spreadsheet.

Google Sheets template for the data: [Database template](https://docs.google.com/spreadsheets/d/11aMYTpt0YrEaPyOI9OSZgQ6lloBnS0mctlHK8u96TTo/edit?usp=sharing)

### Frontend Code

- VueJS - The Progressive JavaScript Framework - https://vuejs.org/
- Vue I18n - Internationalization Plugin - https://kazupon.github.io/vue-i18n/
- Vue Leaflet - Mapping - ( Version of Leaflet that works with VueJS ) - https://vue2-leaflet.netlify.com/
- BootstrapVue - Responsive Layout - ( Version of Bootstrap that works well with VueJS ) - https://bootstrap-vue.js.org/

## Current Hosting

The NC COVID Support website is currently hosted as a GitHub Pages site, however this may well change as we are intending to add a "back end" and using the Umbraco CMS.

