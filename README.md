# BookMark
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
  
  ## Description

  Welcome to BookMark, your personal space to keep track of all the books you've read and share your thoughts and reviews. Whether you're an avid reader, a book enthusiast, or just someone looking to discover new literary gems, BookMark is the perfect platform for you.

  The motivation behind creating BookMark was to solve the problem faced by avid readers who read numerous books and wish to record their thoughts and feelings about each book. BookMark allows users to keep track of their books and write personal insights and reviews for each one. This platform helps readers maintain a record of their literary journey and share their experiences with others.

  While working on BookMark, we learned and implemented various technologies and concepts to build a full-stack application:

  - We used Node.js and Express.js to create a RESTful API, allowing communication between the front end and back end of the application.
  - Handlebars.js was used as the template engine for rendering dynamic content on the front end.
  - MySQL database, along with the Sequelize ORM, facilitated data storage and retrieval for user profiles and book reviews.
  - User authentication was implemented using express-session and cookies, ensuring secure access to user profiles.
  - We integrated the MD5 library into the application to generate MD5 hash values. MD5 helped us ensure data integrity and security by producing unique representations of input data, which is particularly valuable when handling sensitive information and user authentication.
  - To enhance the user experience, we incorporated a responsive and intuitive user interface, making it easy for users to navigate the application.
  - The project followed the Model-View-Controller (MVC) paradigm, ensuring a clear separation of concerns for better maintainability and scalability.
  - We deployed the application on Heroku, making it accessible to users with live data.
  - Through this project, we gained practical experience in agile development methodologies, version control using Git and GitHub, and handling feature and bug fixes through the Git branch workflow and pull requests.

  We are proud of the polished UI and the overall user-friendly design that BookMark offers, providing a valuable platform for book enthusiasts to express and share their thoughts on various books they've read.

  ## Table of Contents

  - [Installation](#installation)
  
  - [Usage](#usage)

  - [Credits](#credits)
  
  - [License](#license)

  - [How to Contribute](#Contribute)

  - [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

    - npm install ,  npm install md5
  
  Using MYSQL Workbench input Schema file under the db folder:

    - DROP DATABASE IF EXISTS bookmark_db;
     CREATE DATABASE bookmark_db;

  On the commandline run the following command to push your seeds from the db:

    - node seeds/seed.js

  Run the following command to open your server in port:3001:

    - npm start

  ## Usage

 ### 1
 To experience BookMark, visit our deployed Heroku website: https://the-bookmark-bd6e85df4657.herokuapp.com/

 For a detailed walkthrough of the application, watch our video:

 [![BookMark Video](https://img.youtube.com/vi/Ttc4wZZy8Wk/0.jpg)](https://youtu.be/Ttc4wZZy8Wk)

 ### 2 
  #### -When the user opens the page, they will be presented with a homepage that offers two options:
  #### -"Sign Up": If the user doesn't have an account, they can click this option to create a new account. They will need to provide their full name, email address, and password to register.
  #### -"Login": If the user already has an account, they can click this option to log in. They will need to enter their email and password to access their profile.

### 3
 #### Profile Page:

 ### After logging in, the user will be directed to their profile page, where they can perform the following actions:
  #### -View Past Reviews: The user will be able to see a list of their past reviews for books. If they haven't written any reviews yet, this section will be empty.
 #### -Make a Review: The user will see a form where they can write a review for a book. The form will include fields such as the book title, author, review text, and rating. Once they submit the review, it will be added to their list of past reviews.
 #### -Edit Review: For each past review, the user will have the option to edit it. By clicking the "Edit" button, they can modify the review's content, such as updating the review text or changing the rating.
 #### -Delete Review: If the user no longer wants a specific review to appear in their profile, they can click the "Delete" button next to the review, and the review will be permanently removed from their list of past reviews.

### 4

#### Review Display:
#### Each review made by the user will be displayed with relevant information, such as the book title, author, review text, and rating. The reviews will be listed in reverse chronological order, with the most recent review at the top.
#### By following these steps, users can easily navigate the book application, sign up or log in, write reviews for books, manage their existing reviews, and view a history of their past reviews in their profile. This design provides a user-friendly experience for book enthusiasts to share their thoughts and experiences with different books.

## Credits

  Collaborators for BookMark Application:

  Karen Pineda - https://github.com/k-pineda 

  Juan Sanchez - https://github.com/JuanSanchez39

  Facundo Garay - https://github.com/HyonNeo 

  Jose Alzuri - https://github.com/Jalzu1007

  ## License  

  This project is licensed under the MIT License.

  For more informations, please visit: [License Link](https://opensource.org/licenses/MIT)

  MIT License

  Copyright (c) 2023 The Recipe Bar

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.


  ## How to Contribute

    We welcome any ideas and contributions to this repository. If you are interested in contributing, feel free to open an issue or submit a pull request.

  ## Questions

  If you have any questions about the repository or the application, please open an issue, and we will respond as soon as possible. You can also explore more of our projects on GitHub:

  - https://github.com/k-pineda 
  - https://github.com/HyonNeo 
  - https://github.com/Jalzu1007 
  - https://github.com/JuanSanchez39