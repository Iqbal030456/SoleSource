import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import FeaturedProducts from '../components/FeaturedProducts';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    enter: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
    },
};

const HomePage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
        document.body.classList.add('sidebar-open');
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
        document.body.classList.remove('sidebar-open');
    };

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
                <FeaturedProducts />
            </main>

            <Footer />
        </motion.div>
    );
};

export default HomePage;

