# SkillSwap Project 

From Github Repo Link: https://github.com/wirdani84/Project-MAS-2.git

SkillSwap is a full-stack web application that allows users to exchange skills through a collaborative, non-monetary platform. Users can sign up, create profiles, and connect with others by offering and requesting specific skills. The app is built using Node.js, Express, SQLite, and HTML/CSS/JS on the front end.

## 🔧 Features

* Sign in and registration system
* Create a user profile with skills and interests
* SkillSwappers page showcasing submitted profiles
* Clean, responsive UI
* Deployed using [Render](https://render.com)

## 🚀 Live Demo

[Visit SkillSwap on Render](https://project-mas-2.onrender.com)

## 📂 Project Structure

```
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
```

## 🧠 Technologies Used

* **Backend**: Node.js, Express
* **Database**: SQLite
* **Frontend**: HTML, CSS, JavaScript
* **Deployment**: Render

## 📥 Installation (Optional for local testing)

```bash
git clone https://github.com/wirdani84/Project-MAS-2.git
cd Project-MAS-2
npm install
node server.js
```

Visit `http://localhost:3000`

## 🔐 Notes for Instructor

* This project demonstrates full-stack integration.
* All user interaction is routed through Express with SQLite data persistence.
* Registration and profile creation are stored and dynamically loaded.
* External assets (e.g., profile pictures, logo) are included in the `public/images/` directory.
* The UI is designed to be minimal and user-friendly, with focus on functionality.
* A sample account for testing:

  * **Email**: [test@example.com](mailto:test@example.com)
  * **Password**: password123
* Be sure to include a `.gitignore` file with:

  ```
  node_modules/
  .env
  users.db
  ```
Testing Strategy

This project uses a combination of manual testing and code-level validation to ensure functionality and reliability across the full stack.

🔹 Frontend Testing
All forms (Sign In, Register, Profile Submission) were manually tested for:
Required field validation
Mismatched passwords
Empty inputs
Navigation and redirects after submission
Visual inspection was done across multiple screen sizes (desktop and mobile) to ensure responsive design.

🔹 Backend Testing
All Express routes (/login, /register, /profile) were tested using:
Valid and invalid POST data
Console logging and response code validation
Error handling is included for database operations (e.g. failed insert, invalid data).

🔹 Integration Testing (Light)
Full user flow was tested:
New user registers → redirected to welcome page
Profile info submitted → displayed on SkillSwappers page

🔹 Future Enhancements
Add automated unit tests using Jest or Mocha
Implement route tests with Supertest
Validate DB operations with mock datasets

## 🙋‍♀️ Questions?

For any inquiries or demo requests, please contact the developer.

---

© 2025 SkillSwap. Created for educational purposes.
