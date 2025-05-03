
# SkillSwap Project

A full-stack web application for skill exchange — users can sign in and offer or learn skills in a community environment.

## Live Demo

After deployment, your app will be live at:  
`https://your-app-name.onrender.com`

*(Replace this with your actual Render URL after deployment)*

---

## How to Deploy to Render

### 1. Push Project to GitHub

If not already done, push your local project:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 2. Create a Render Account

- Go to [https://render.com](https://render.com)
- Sign up with your GitHub account and authorize access

### 3. Create a New Web Service

- Click **“New” > “Web Service”**
- Select your GitHub repo (e.g., `skillswap-project`)
- Set up:
  - **Environment**: `Node`
  - **Build Command**: `npm install`
  - **Start Command**: `npm start`
  - **Root Directory**: leave blank (unless server.js is in a subfolder)

Click **Create Web Service**

---

## 🧪 Local Development

To run locally:

```bash
npm install
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧾 Features

- Sign in form with email + password
- Dummy login logic in backend
- Frontend styled with HTML/CSS
- Animated button interactions
- Ready for future database integration

---

## 🔐 Notes

- Current login accepts only:  
  `email: test@example.com`  
  `password: password123`

- Be sure to add a `.gitignore` with:
  ```
  node_modules/
  .env
  ```

---

## 📄 License

MIT — free to use and modify.
