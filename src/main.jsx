/**
 * ============================================================
 * main.jsx — Application Entry Point
 * ============================================================
 *
 * PURPOSE:
 *   This file is the very first JavaScript that runs when the
 *   application starts. It does two things:
 *   1. Imports the global CSS styles (index.css)
 *   2. Mounts the React <App /> component into the HTML page
 *
 * HOW IT WORKS:
 *   - `index.html` has a <div id="root"></div>
 *   - This file finds that div and renders React inside it
 *   - <React.StrictMode> enables extra development warnings
 *     (it does NOT affect production builds)
 *
 * YOU RARELY NEED TO EDIT THIS FILE.
 * ============================================================
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
