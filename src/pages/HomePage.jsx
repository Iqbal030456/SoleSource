/**
 * ============================================================
 * HomePage
 * ============================================================
 *
 * PURPOSE:
 *   The main landing page of SoleSource. Shows:
 *   - Header with search bar
 *   - Sidebar navigation (toggled by hamburger menu)
 *   - Featured Products section (the main content)
 *   - Footer with social links
 *
 * HOW TO EDIT:
 *   - To change which products appear, edit `src/data/products.js`
 *   - To change the page transition animation, edit `src/config/animations.js`
 *   - To change the background, edit the `.gradient-bg` class in `src/index.css`
 *   - The sidebar logic is handled by `src/hooks/useSidebar.js`
 *
 * ROUTE: "/" (defined in App.jsx)
 * ============================================================
 */

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import FeaturedProducts from '../components/FeaturedProducts';
import { useSidebar } from '../hooks/useSidebar';
import { pageVariants } from '../config/animations';

const HomePage = () => {
    // Custom hook that manages sidebar open/close state
    // and handles body scroll lock automatically
    const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();

    return (
        <motion.div
            className="min-h-screen flex flex-col"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
        >
            {/* Top navigation bar */}
            <Header onMenuClick={openSidebar} />

            {/* Slide-in sidebar menu */}
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

            {/* Main Content Area */}
            <main className="flex-1 gradient-bg">
                <FeaturedProducts />
            </main>

            {/* Site footer */}
            <Footer />
        </motion.div>
    );
};

export default HomePage;
