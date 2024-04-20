# ProjectWebsite2024
This is a recipe website's repository. 

# Language Used

# File Structure

<img width="787" alt="image" src="https://github.com/WebProgrammingStudioSem124/ProjectWebsite2024/assets/152080640/17dd087a-eded-4f03-ba27-9a586a732e5d">

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
  

  
