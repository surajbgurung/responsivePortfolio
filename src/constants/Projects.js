import portfolio from "./images/portfolio.png"
import getmet from "./images/getmet.png"
import musicvenu from "./images/mv.png"
import booksearch from "./images/booksearch.png"
import employeesearch from "./images/employee.png"
export const projects = {
    heading: "Projects",
    quote: "Lots of code! Lots of fun stuff!",
    projectList: [
        {
            name: "Project 1: Portfolio-Builder",
            description: "Portfolio Builder is an interactive online portfolio template that allows you to plug in information and build a cohesive portfolio. Technologies: MERN (MongoDB, Express, React, Node.js), MongoDB Atlas",
            DeployedLink: "https://bit.ly/3jagF0R",
            GitHub: "https://bit.ly/34rQJd1",
            image: portfolio
        }, {
            name: "Project 2: GetMed",
            description: "A web application that acts as a pharmacy e-commerce site and delivery service. Technologies: HTML, CSS, Javascript, Bootstrap, Jquery, AJAX, MySQL, Sequelize, Node.js, Express.js, API (Walgreens API)",
            DeployedLink: "https://bit.ly/3j7CSwu",
            GitHub: "https://bit.ly/31mi0vu",
            image: getmet
        }, {
            name: "Project 3: Music Venue Planner",
            description: "App where users can plan for their musical events in New York City. Technologies: MySQL database with Sequelize, HTML, CSS, jQuery, Express, Node.js,Bootstrap.",
            DeployedLink: "https://bit.ly/2ZuUPgZ",
            GitHub: "https://bit.ly/32kRqC3",
            image: musicvenu
        }, {
            name: "Project 4: Google Book Search",
            description: "The app is a single-page React Application. Users can search for books and have the option to delete or save books. Technologies: MERN(MongoDB, Express, React, Node.js)",
            DeployedLink: "https://bit.ly/3mboh5w",
            GitHub: "https://bit.ly/3hv0k5O",
            image: booksearch
        }, {
            name: "Project 5: Employee-Directory",
            description: "The app which is used to search Employee with its FirstName and Last Name by using React. Technologies: Express, React, Node",
            DeployedLink: "https://bit.ly/2FpZEl5",
            GitHub: "https://bit.ly/2RhqPkb",
            image: employeesearch
        }
    ]
}