SkillSwap Project

SkillSwap is a full-stack web application that allows users to exchange skills through a collaborative, non-monetary platform. Users can sign up, create profiles, and connect with others by offering and requesting specific skills. The app is built using Node.js, Express, SQLite, and HTML/CSS/JS on the front end.

🔧 Features

Sign in and registration system

Create a user profile with skills and interests

SkillSwappers page showcasing submitted profiles

Clean, responsive UI

Deployed using Render

🚀 Live Demo

Visit SkillSwap on Render

📂 Project Structure

project-mas-2/
├── public/
│   ├── index.html
│   ├── register.html
│   ├── welcome.html
│   ├── skillswappers.html
│   ├── styles.css
│   ├── register.css
│   ├── images/
│   │   └── (uploaded profile images, logo, etc.)
├── server.js
├── users.db
├── package.json

🧠 Technologies Used

Backend: Node.js, Express

Database: SQLite

Frontend: HTML, CSS, JavaScript

Deployment: Render

📥 Installation (Optional for local testing)

git clone https://github.com/wirdani84/Project-MAS-2.git
cd Project-MAS-2
npm install
node server.js

Visit http://localhost:3000

🔐 Notes for Instructor

This project demonstrates full-stack integration.

All user interaction is routed through Express with SQLite data persistence.

Registration and profile creation are stored and dynamically loaded.

External assets (e.g., profile pictures, logo) are included in the public/images/ directory.

The UI is designed to be minimal and user-friendly, with focus on functionality.

A sample account for testing:

Email: test@example.com

Password: password123

Be sure to include a .gitignore file with:

node_modules/
.env
users.db

🙋‍♀️ Questions?

For any inquiries or demo requests, please contact the developer.

