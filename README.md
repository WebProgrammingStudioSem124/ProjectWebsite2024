# ProjectWebsite2024
This is a recipe website's repository. 

# Language Used

# File Structure
my_project/
├── README.md
├── .gitignore
├── package.json
├── index.js (nodejs to host the site)
├── views/
│   ├── partials/
│   │   ├── navbar.ejs (later we'll add these into our webpage)
│   │   └── footer.ejs
│   ├── homepage.ejs *(the mainpage of the website)*
│   ├── login.ejs 
│   ├── register.ejs
│   ├── profile.ejs *(the user profile page)*
│   ├── search_result.ejs *(When user search for a keyword/ recipe they will be taken to the search page)*
│   ├── recipe.ejs (The recipe's post page allows user to view the post)
│   └── create_post.ejs (The create post page allows to create their own post)
└── public/
    ├── css/
    │   ├── common.css
    │   ├── homepage.css
    │   ├── login.css
    │   ├── register.css
    │   ├── profile.css
    │   ├── search.css
    │   ├── recipe.css
    │   └── create_post.css
    ├── js/
    │   ├── homepage.js
    │   ├── login.js
    │   ├── register.js
    │   ├── profile.js
    │   ├── search.js
    │   ├── recipe.js
    │   └── create_post.js
    └── images/

The views directory contains EJS templates. The partials subdirectory contains reusable components like navbar.ejs and footer.ejs.

The public directory contains static files like CSS, JavaScript, and images. Express can serve these files statically with app.use(express.static('public')).

Each EJS file corresponds to a specific page in application. For example, homepage.ejs would contain the HTML structure for homepage. 

Basically how the website will work is that it will run through nodeJS (index.js) which will be connected to a port. And later on we will add models and routes file to handle the backend (Mongoose). But I don't know if we should use separate routes file or handle every routes file in the 

# RUN THE WEBSITE
  1. Make sure to have download nodejs: https://nodejs.org/en/downloadLinks to an external site.
  2. To check if u have download yet, type this in terminal: `node --version`

  3. I KNOW YOU KNOW THIS BUT: To run the index.js file, type this in terminal: `node index.js` and to stop running `Ctrl+C`.
  
  4. Open the website on the browser: `localhost:9000`.

  5. To run the project you will need to install some node_modules(nodemon and express, ejs,...). These are the modules I used yet ignore to push it to github due to its size. So now, you should just type in the terminal `npm install`. To ensure that u install the exact same set of packages as defined in the package.json file.


  6. Nodemon will update u with recent changes without having to restart the project (u can watch this video for more info: https://www.youtube.com/watch?v=SccSCuHhOw0). To run the nodemon: use `npm start`(if u only install nodemon locally (basically I did this)). 
  

  