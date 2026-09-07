#### Rebel Base Movies - Star Wars Episode Browser
##### A Star Wars Movie Episode Guide (Ep 1-6)
##### ExpressJS Single Page Application (SPA) <br> deployed on [Railway](https://railway.com) Cloud Hosting Services
___
#### [Live Application](https://rebel-base-movies.up.railway.app/)
##### Single Page Web Application 
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)<br>
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![JQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
___
#### About This Application:
##### Rebel Base Movies is a Star Wars–themed single-page web application designed to provide an interactive and visually engaging way to explore the first six episodes of the Star Wars film saga. The application presents movie information in a centralized episode guide, allowing users to browse individual films and view important details including movie posters, plot summaries, and featured characters.

##### The project was developed as an ExpressJS-based Single Page Application (SPA) with a focus on creating a responsive, accessible, and visually immersive user experience. Rather than requiring users to navigate through multiple pages, the application dynamically presents movie information within a unified interface, creating a more seamless browsing experience.

##### <ins>What the Application Provides</ins>: 

##### Users can explore Episodes I through VI of the Star Wars saga, beginning with The Phantom Menace and continuing through Return of the Jedi. Each episode provides its own collection of movie information, giving users an easy way to navigate through the original and prequel trilogies.

##### The application includes:

##### Episode Guide — Browse Star Wars Episodes I–VI from a single centralized interface.
##### Movie Artwork — Each episode is presented with visual movie artwork and poster imagery.
##### Plot Summaries — View synopsis information describing the major storyline of each film.
##### Character Information — Explore notable characters associated with each movie.
##### Interactive Navigation — Move between episodes without leaving the single-page application experience.
##### Responsive Interface — Built with Bootstrap to provide a layout that adapts to different screen sizes.
##### Client-Side Interactivity — jQuery is used to provide dynamic interactions throughout the application.
##### Local Movie Data — Movie information is organized within the application's movies.json data source.
##### Cloud Deployment — The application is configured for deployment to cloud hosting platforms such as Railway and Render.

##### <ins>Purpose & Development</ins>: 
##### This project was created as a practical web-development project focused on building a complete, functional web application using the Node.js and ExpressJS ecosystem. It demonstrates how a server-side JavaScript application can combine routing, templating, structured data, client-side scripting, and responsive front-end design into a cohesive application.

##### The project also provides experience with several important areas of modern web development, including:

##### Building and organizing an ExpressJS application
###### Creating reusable interfaces with EJS templating
##### Managing application data using structured JSON
##### Implementing client-side behavior with jQuery
##### Designing responsive interfaces with Bootstrap
##### Organizing static assets such as images, stylesheets, and scripts
##### Configuring an application for production deployment
##### Working with cloud hosting platforms
##### Structuring a project for future features and community contributions

##### <ins>Project Structure</ins>: 

##### The application separates its primary responsibilities into several areas. ExpressJS handles the server and application routing, EJS provides the presentation layer, the public directory contains static assets, and the movies.json file provides the application's movie information.

##### This separation makes the application easier to maintain and provides a foundation for expanding the project with additional movies, characters, features, or external data sources in the future.

##### <ins>Why "Rebel Base Movies"</ins>?

##### The application is designed as a fan-oriented movie guide rather than an attempt to reproduce the full Star Wars universe. The Rebel Base Movies concept provides the application with a themed identity while keeping the primary purpose focused on browsing and learning about the films.

##### The result is a compact Star Wars movie reference application that combines a themed user interface with practical examples of ExpressJS, EJS, Bootstrap, jQuery, JSON data management, and web deployment.
___
#### Dependencies:
[NodeJS](https://nodejs.org/en/docs/)<br>
[ExpressJS](https://expressjs.com/en/4x/api.html)<br>
[Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)<br>
[jQuery](https://api.jquery.com/)<br>
___
#### **Getting Started:** 
##### Before proceeding with the following steps it is assumed that both [Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads) have been downloaded locally on your system. <br> If not, they can be obtained by clicking on the links provided. Further assistance can be found in the documentation if necessary. 
1. **Clone** this repository `$ git clone https://github.com/inglorious-ratbastard/star_wars_movie_app.git`
2. In the terminal/command prompt run the `npm install` or `yarn install` command to install the projects dependencies
3. Run the `node app.js` command in the terminal to start the server and run the application
___
#### Deployment to Render:
##### About: The following explains how this app was deployed to [Render](https://render.com/) Cloud Hosting, assuming that you have already set up an account. Another preferred option for hosting services would be [Railway](https://railway.app/). A brief explanation of how to do this is provided below. 

* ##### Assure that your project has successfully been committed to Github. Any future changes made and pushed up will be directly reflected on [Render](https://render.com/). 
* ##### From the Dashboard click on **New** to connect your Github repo and create your hosted application from the given options (either Static Site or Web Service). 
* ##### Name your projet then scroll down and make sure that the `yarn build` and `yarn start` point to the correct files. *See the Scripts section of `package.json` file for clarification.*
* ##### If you have any global or secret keys you can create them by expanding the **Advanced** tab and manually entering the proper values in the form boxes provided.
___
#### **Reporting Bugs or Issues:**
 ##### If you would like to report a **Bug** or **Issue** in this repo feel free to do so under the **Issues** tab or contact me directly about any major concerns. Ideas for improvements or enhancements to this project are also encouraged. Please address these matters by sending a **Pull Request** as they will be reviewed for potential consideration. 
___
#### Contributing:
* ##### **Clone** this repository and create a new branch:<br>
  `$ git clone https://github.com/inglorious-ratbastard/star_wars_movie_app.git -b name_of_new_branch`
* ##### Introduce a new feature, fix an existing bug, or clean up current code 
* ##### Throroughly **Test** the changes that have been implemented [Testing suite is not included] - some suggestions for testing: [Cypress](https://www.cypress.io/), [Jasmine](https://jasmine.github.io/), [Mocha](https://mochajs.org/) 
* ##### Submit a **Pull Request** accurately explaining the changes that were made to this repository
##### Your contribution will be reviewed and considered for merge into Main or a separate branch.<br> Thank you for assisting in the development and/or advancement of this project.
___
