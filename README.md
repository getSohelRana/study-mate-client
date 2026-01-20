# StudyMate — Find Your Perfect Study Partner

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**StudyMate** is a MERN Stack web platform designed to help students connect and collaborate for better learning outcomes. It enables users to find study partners based on subjects, learning preferences, or nearby locations, making education more interactive, engaging, and goal-oriented.

---

## 🌐 Live Demo

[Click here to view the Live Demo Frontend](https://superlative-crisp-39bc13.netlify.app/)
[Click here to view the Live Demo Backend](https://study-mate-server-virid.vercel.app/)

## 📂 GitHub Repository

[StudyMate on GitHub Frontend](https://github.com/getSohelRana/study-mate-client.git)
[StudyMate on GitHub Backend](https://github.com/getSohelRana/study-mate-server.git)

---

## 🛠 Technologies Used

* **Frontend:**

  * React.js (`^19.2.0`)
  * TailwindCSS (`^4.1.17`)
  * DaisyUI (`^5.5.5`)
  * React Icons (`^5.5.0`)
  * Swiper.js (`^12.0.3`)
  * React Fast Marquee (`^1.6.5`)
  * SweetAlert2 (`^11.26.3`)

* **Backend:**

  * Node.js (`^20.x`)
  * Express.js (`^4.x`)
  * MongoDB (Atlas / Local)

* **Authentication & Hosting:**

  * Firebase (`^12.6.0`) Authentication

* **Tooling:**

  * Vite (`@tailwindcss/vite`)

---

## 🎯 Features

* **User Authentication:**

  * Sign up / Login with Firebase Authentication
  * Secure user sessions

* **Find Study Partners:**

  * Search students by subjects
  * Filter by experience level (Beginner , Intermediate, Advanced)
  * Sort by experience level high to low
  * Real-time requests and partner suggestions

* **Responsive & Interactive UI:**

  * Fully responsive design
  * DaisyUI components for consistent styling
  * Swiper carousels for hero and reviews section
  * Real-time notifications using SweetAlert2

* **CRUD Operations:**

  * Users can send/accept/delete study partner requests
  * View partner profiles and messages
---

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/studymate.git
cd studymate
```

2. Install dependencies (frontend & backend):

```bash
npm install
```

3. Set up Firebase Authentication (update your `.env`):

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.


---

## 🌟 Future Improvements

* Find subject base partners
* Top rating-based partner suggestions
* Advanced filtering and sorting by experience, availability, and subjects
* Dark mode toggle

---

## 👨‍💻 Author

**Your Name**
[GitHub](https://github.com/getSohelRana) 

---

## 📄 License

This project is licensed under the MIT License.
