My MERN Blog App
This is a full-stack MERN named Insights(MongoDB, Express.js, React.js, and Node.js) blog app that allows users to create, read, update, and delete posts. Users can also change their profile picture.

Getting Started
Prerequisites
Before you can run the app, you'll need to have the following software installed:

Node.js
MongoDB
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/my-mern-blog.git
Install the dependencies:
bash
Copy code
cd my-mern-blog
npm install
cd client
npm install
cd ..
Create a .env file in the root directory with the following variables:
makefile
Copy code
MONGODB_URL=<your-mongodb-url>
JWT_SECRET=<your-jwt-secret>
Start the app:
arduino
Copy code
npm run dev
This will start both the server and client.

Usage
Home Page
The home page displays all the posts in reverse chronological order. Logged in users can create new posts by clicking on the "Write" button in the top navigation bar.

Authentication
The app uses JWT authentication. Users can register and log in using the "Register" and "Login" links in the top navigation bar. Logged in users can log out using the "Logout" link.

Profile Picture
Logged in users can change their profile picture by clicking on the avatar in the top navigation bar.

Post Page
Clicking on a post title will take you to the post page, where you can view the post and its comments. Logged in users can edit and delete their own posts by clicking on the "Edit" and "Delete" buttons at the bottom of the post.

Create Post Page
Logged in users can create a new post by clicking on the "Write" button in the top navigation bar. The create post page has fields for the post title, image, and content.

Edit Post Page
Logged in users can edit their own posts by clicking on the "Edit" button at the bottom of the post on the post page. The edit post page has fields for the post title, image, and content.

Delete Post
Logged in users can delete their own posts by clicking on the "Delete" button at the bottom of the post on the post page. The app will prompt the user to confirm the deletion before deleting the post.

Comment
Logged in users can add comments to a post on the post page. The comment form is at the bottom of the post.

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.
