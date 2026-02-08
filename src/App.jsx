import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import SearchPage from './pages/SearchPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </AnimatePresence>
    )
}

function App() {
    return (
        <Router>
            <AnimatedRoutes />
        </Router>
    )
}

export default App

