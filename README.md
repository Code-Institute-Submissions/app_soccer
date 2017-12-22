# AngularJS Stream 1 Project
 
## Overview
   SPORTSNEWS.COM
 * Sports news website showing news from major sports websites.
 * JSON Data sourced from https://newsapi.org

## Features
#### Header
 * Navbar links to other pages
#### Front page
 * Bootstrap carousel
 * Bootstrap cards
 * Click events to show/ hide news in detail
 * click events to change json source
#### News Page
 * Full news reports
 * Click events to open news source website
#### Contact Page
 * Fields: Name, Email and message
 * Basic validation
 * Submit button becaomes active when valid data entered. 
 * When submitted successfully the form is hidden and a success message is show.  
## Tech Used
AngularJS Stream 1 Project uses a number of open source projects to work properly:
 * AngularJS [![N|Solid](https://angularjs.org/favicon.ico)](https://angularjs.org/)
 * Bootstrap - includes jQuery (needs popper.js for dropdowns cmd: npm i popper.js)
 * NodeJS


And of course AngularJS Stream 1 Project itself is open source with a public repository
on GitHub.
## Contributing
 Eamon Pender
### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)