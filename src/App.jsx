/**
 * ============================================================
 * App.jsx — Root Component & Route Configuration
 * ============================================================
 *
 * PURPOSE:
 *   This is the "brain" of the app. It decides which page to show
 *   based on the current URL. It also wraps everything in
 *   <AnimatePresence> so page transitions are animated.
 *
 * HOW ROUTING WORKS:
 *   - User visits "/"          → shows HomePage
 *   - User visits "/news"      → shows NewsPage
 *   - User visits "/new-items"  → shows NewItemsPage
 *   - User visits "/popular"    → shows PopularItemsPage
 *   - User visits "/search"    → shows SearchPage
 *   - User visits "/about"     → shows AboutPage
 *   - User visits "/contact"   → shows ContactPage
 *
 * HOW TO ADD A NEW PAGE:
 *   1. Create a new file in `src/pages/`, e.g. `MyNewPage.jsx`
 *   2. Import it at the top of this file
 *   3. Add a new <Route> inside <Routes> below
 *      Example: <Route path="/my-page" element={<MyNewPage />} />
 *   4. Add a link in the Sidebar (`src/components/Sidebar.jsx`)
 *      to the `menuItems` array so users can navigate to it
 * ============================================================
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Page imports — each represents a full page view
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import SearchPage from './pages/SearchPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NewItemsPage from './pages/NewItemsPage'
import PopularItemsPage from './pages/PopularItemsPage'

/**
 * AnimatedRoutes — Internal wrapper component
 *
 * This component uses `useLocation()` to track the current URL.
 * The `key={location.pathname}` on <Routes> tells React that
 * each URL is a "different" element, which triggers Framer Motion's
 * exit/enter animations via <AnimatePresence>.
 *
 * You generally don't need to edit this function.
 */
function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/new-items" element={<NewItemsPage />} />
                <Route path="/popular" element={<PopularItemsPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </AnimatePresence>
    )
}

/**
 * App — The top-level component
 *
 * <Router> enables client-side routing (no full page reloads).
 * Everything inside <Router> can use React Router hooks and
 * components like <Link>, useNavigate(), useLocation(), etc.
 */
function App() {
    return (
        <Router>
            <AnimatedRoutes />
        </Router>
    )
}

export default App
