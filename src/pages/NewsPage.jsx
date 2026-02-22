/**
 * ============================================================
 * NewsPage
 * ============================================================
 *
 * PURPOSE:
 *   Displays the latest news articles about sneakers and streetwear.
 *
 * HOW TO EDIT:
 *   - To add/edit news articles, edit `src/data/news.js`
 *   - Page transition: configured in `src/config/animations.js`
 *
 * ROUTE: "/news" (defined in App.jsx)
 * ============================================================
 */

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import LatestNews from '../components/LatestNews';
import { useSidebar } from '../hooks/useSidebar';
import { pageVariants } from '../config/animations';

const NewsPage = () => {
    const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();

    return (
        <motion.div
            className="min-h-screen flex flex-col"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
        >
            <Header onMenuClick={openSidebar} />
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

            <main className="flex-1 gradient-bg">
                <LatestNews />
            </main>

            <Footer />
        </motion.div>
    );
};

export default NewsPage;
