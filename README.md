# SoleSource Project Documentation

Welcome to **SoleSource**! This document is designed to help junior developers onboard quickly by detailing the tech stack, project structure, and key architectural decisions used in the application.

## 🚀 Tech Stack Overview

This project is a modern Single Page Application (SPA) built with the following technologies:

### 1. **React 18**
- **Role:** Core UI Component library.
- **Why:** Used for building modular, reusable, and interactive user interfaces.

### 2. **Vite**
- **Role:** Build tool and development server.
- **Why:** Replaces tools like Create React App (CRA) or Webpack because it provides much faster cold server starts and instant Hot Module Replacement (HMR).
- **Key Files:** `vite.config.js` (configuration file).

### 3. **React Router DOM (v7)**
- **Role:** Client-side routing.
- **Why:** Handles navigation between different pages in the SPA without fully reloading the browser.
- **Key Files:** Defined in `src/App.jsx`.

### 4. **Tailwind CSS (v3) & PostCSS**
- **Role:** Utility-first CSS framework for styling.
- **Why:** Allows for rapid UI development relying heavily on CSS utility classes directly inside React components, rather than maintaining large `.css` files.
- **Custom Configuration:** Tailored colors (`navy`, `mint`, `lime`) and fonts (`Open Sans`, `Inter`) are set in `tailwind.config.js`.

### 5. **Framer Motion**
- **Role:** Animation library for React.
- **Why:** Used here specifically to add smooth fade-in and slide-out page transitions during navigation (via `<AnimatePresence>` in `src/App.jsx`).

---

## 📁 Folder Structure

Here is a breakdown of the important files and directories.

```text
SoleSource/
├── package.json              # App dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration (custom fonts/colors)
├── index.html                # The main HTML entry point served by Vite
├── assests/                  # [NOTE: Misspelled folder] Contains SVG icons and images
├── public/                   # Public assets (like favicons) bypass the bundler
├── src/                      # 🌟 Your main workspace for React code
│   ├── main.jsx              # The React entry point (mounts `<App />` to the DOM)
│   ├── App.jsx               # Defines all routes and page-level animations
│   ├── index.css             # Global CSS setup, imports Tailwind utilities
│   ├── components/           # Reusable UI component pieces (Buttons, Navbars, etc.)
│   ├── pages/                # Top-level page views (Home, About, News, Search, Contact)
│   └── data/                 # Static JSON, mock data, or config files
└── home.html, script.js, style.css  # ⚠️ Legacy static files, likely safe to ignore or phase out
```

### 🚨 Note on Legacy Files
You will notice some vanilla DOM files in the root folder (`home.html`, `script.js`, `style.css`). It looks like this project was initially prototyped in vanilla HTML/CSS/JS before being transitioned to React. When working on features, **always use the React files inside the `src/` directory**.

---

## 🧭 Application Routing

The routing is orchestrated in `src/App.jsx` using `react-router-dom`. Currently, the available routes are:
- `/` - `HomePage`
- `/news` - `NewsPage`
- `/search` - `SearchPage`
- `/about` - `AboutPage`
- `/contact` - `ContactPage`

Page transitions are smoothly animated. Notice the `<AnimatePresence mode="wait">` wrapping our routes. This tells Framer Motion to wait for the outgoing page's exit animation to finish before animating in the new page.

---

## 🛠️ Getting Started for Development

### Prerequisites
Make sure you have Node.js and `npm` installed.

### 1. Install Dependencies
Always install dependencies when you first pull the project:
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open the local URL Vite gives you in your browser. Any changes you make in the `src` folder will instantly reflect in the browser.

### 3. Building for Production
Once a feature is done and ready to be deployed:
```bash
npm run build
```
This minifies and bundles the React code into optimal static files inside a `/dist` folder.

---

## 💡 Tips for Junior Developers

1. **Working with Styling:** Before writing custom CSS in `index.css`, always check if Tailwind has a utility class for it. Review the customizations in `tailwind.config.js` to see our brand colors.
2. **Component Separation:** If a section of code in a `Page` component gets too large or is used in multiple pages, extract it to a standalone component in the `src/components/` folder.
3. **Icons & Assets:** There is a folder titled `assests/` (containing items like logo.svg, menu-icon.svg). Ensure you use correct relative imports when referencing these assets inside React components.
