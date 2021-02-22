export const PortfolioInfo = [
  {
    name: "TTRPG-Battlemap",
    URL: "https://github.com/paulrobhendrickson/TTRPG-Battlemap",
    liveSite: "https://map-app-dnd.netlify.app/",
    description:
      "With this app you can quickly build interactive maps to use during your TTRPGs (table-top roleplaying games), save them for later, and view maps others have made public. This app will keep track of the initiative, move speed, and location of all characters for your TTRPG.",
    image: "/assets/images/TTRPG-Battlemap.gif",
    technologies:
      "Axios, bcryptjs, CSS, Express, HTML5, JavaScript, MongoDB, Node.js, Nodemon, Passport, React Router, ReactJS, UUID.",
  },
  {
    name: "Lizards and Lairs",
    URL: "N/A",
    liveSite: "N/A",
    description:
      "Focusing more on design this is my design for where I hope to move my TTRPG-Battlemap app.",
    image: "/assets/images/lizards.png",
    technologies: "Figma",
  },
  {
    name: "Flashcard App",
    URL: "https://github.com/paulrobhendrickson/flashcard-app",
    liveSite: "https://umn-bootcamp-flashcards.netlify.app/home",
    description:
      "A flashcard app I made for my students to go refresh and test themselves on concepts we learned in class",
    image: "/assets/images/flashcard.png",
    technologies:
      "Firebase, Lodash, Node-sass, React, React Router-dom, SCSS, Typescript",
  },
  {
    name: "Customer Apollo Federation",
    URL: "https://github.com/paulrobhendrickson/customer-apollo-federation",
    liveSite: "N/A",
    description:
      'Proof of concept for working with the Apollo GraphQL Federation technology. With this implementation you can standup several GraphQL servers and access them all with one single endpoint. This implementation features 3 service layers, 3 persistence layers (mocked as REST APIs), and one gateway, totaling 7 servers to combine one single schema and understanding of how a "customer" might be viewed enterprise-wide.',
    image: "/assets/images/customerFed.png",
    technologies:
      "Apollo Federation, Apollo GraphQL, Axios, Express, GraphQL, GraphQL Tools, GraphQL Voyager, Lodash, Microservices, Node.js, TypeScript",
  },
  {
    name: "City Weather Federation",
    URL: "https://github.com/paulrobhendrickson/city-weather-federation",
    liveSite: "N/A",
    description:
      'My first proof of concept for working with Apollo Federation. This implementation combines together a service for "city" and one for "weather." The city implementation is a simple find/filter in an array and based on the name of that city can use the "weather" service to get weather information.',
    image: "/assets/images/city-weather.png",
    technologies:
      "Apollo Federation, Apollo GraphQL, Axios, GraphQL, GraphQL Tools, Lodash, Microservices, Node.js, TypeScript",
  },
  {
    name: "Apollo Fastify Template",
    URL: "https://github.com/paulrobhendrickson/apollo-fastify-template",
    liveSite: "N/A",
    description:
      "A template to easily start with a Fastify implmentation of Apollo GraphQL. Note: This will not run inside a docker container.",
    image: "/assets/images/template.png",
    technologies:
      "Apollo GraphQL, Fastify, GraphQL, GraphQL Tools, GraphQL Voyager, Node.js, TypeScript",
  },
  {
    name: "Apollo Express Template",
    URL: "https://github.com/paulrobhendrickson/apollo-express-template",
    liveSite: "N/A",
    description:
      "A template to easily start with an Express implmentation of Apollo GraphQL.",
    image: "/assets/images/template.png",
    technologies:
      "Apollo GraphQL, Express, GraphQL, GraphQL Tools, GraphQL Voyager, Node.js, TypeScript",
  },
  {
    name: "Apollo Federation Template",
    URL: "https://github.com/paulrobhendrickson/apollo-federation-template",
    liveSite: "N/A",
    description:
      'A template to easily start with Apollo Federation implmentation of Apollo GraphQL. This repo is 2 services one for "hello" and one for "goodbye" and a gateway that merges them.',
    image: "/assets/images/federationTemplate.png",
    technologies:
      "Apollo Federation, Apollo GraphQL, Express, GraphQL, GraphQL Tools, GraphQL Voyager, Microservices, Node.js, TypeScript",
  },
  {
    name: "Detsy",
    URL: "https://github.com/paulrobhendrickson/detsy",
    liveSite: "https://detsy2.herokuapp.com/",
    description:
      "This is a marketplace app. Using this app users can create a profile, list items to sell, shop for items, and communicate with other users on the site. All products listed by a given user will show up on their own personal page, or you can view other users pages. So if you find a seller you like, you can look for other things they sell. The site also contains a search function, for when you’re looking for that special something for a special someone.",
    image: "/assets/images/detsy.gif",
    technologies:
      "Axios, bcryptjs, CSS, Express, HTML, JavaScript, MySQLDB, Node.js, Nodemon, Passport, Sequelize",
  },
  {
    name: "Doggify",
    URL: "https://github.com/paulrobhendrickson/doggify",
    liveSite: "https://paulrobhendrickson.github.io/doggify/",
    description: `Take this personality quiz to find out what dog and vacation spot matches your personality type. Click the "Yes" button on the main page to initiate the quiz. You'll answer 10 scenario questions with answers relating to different personality types. After answering the last question you'll find out which dog breed and vacation spot best matches your personality type on our results page.`,
    image: "/assets/images/doggify.gif",
    technologies:
      "Adobe Photoshop, Axios, Dog API, jQuery, Lodash, Open Weather API, Simple Grid",
  },
  {
    name: "Quizz Whiz",
    URL: "https://github.com/paulrobhendrickson/multiple-choice-game",
    liveSite: "https://paulrobhendrickson.github.io/multiple-choice-game/",
    description:
      "A dynamic multiple choice game. The user begins the game in the start screen. When the start game is clicked the user is shown the rules of score keeping on the game and prompted for a username. The user can jump straight to the high score window or enter a username and take the quiz. The user is presented with 5 music theory questions, each more difficult than the last as a timer ticks down. Upon completing the quiz the user is brought to the high score page.",
    image: "/assets/images/quizzWhizGif.gif",
    technologies: "CSS, HTML5, JavaScript",
  },
  {
    name: "Template Engine",
    URL: "https://github.com/paulrobhendrickson/template-engine",
    liveSite: "N/A",
    description:
      "This is an app to organize your work team. It runs using js.node and is a CLI app. When the index.js file is run the user will be prompted a series of questions to get information about their work team. All employees will have the majority of questions the same, but the user will receive a different question based on what role the employee is fulfilling. Managers will be asked what their office number is. Interns will be asked what school they attend. Engineers will be asked what their github username is. This information will be dynamically created and made into an HTML file named after the name of their team. The layout of the team members depends on the number of members on the team so that there will never be more than 4 employees in any given row, and higher rows will have fewer employees than the lower ones, and they are all as evenly distrubted as possible.",
    image: "/assets/images/templateEngine.gif",
    technologies: "CSS, FS, HTML5, Inquirer, JavaScript",
  },
  {
    name: "Simple Weather App",
    URL: "https://github.com/paulrobhendrickson/weather-app",
    liveSite: "https://paulrobhendrickson.github.io/weather-app/",
    description:
      "A simple weather app. Users can put in a city of their choosing and the app will generate the current conditions, temperature, humidity wind speed and UV index, as well as a background that fits that current condition. The app will then generate the weather over the next 5 days displaying the date, conditions, temperature, humidity, and changing the background to an image that fits. The app saves past searches in local data and has clickable links on the right hand side to search for those cities again. The app will always open back up with the most recent search.",
    image: "/assets/images/weatherAppGif.gif",
    technologies: "CSS, HTML5, JavaScript, JQuery, Weather API",
  },
];
