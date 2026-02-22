/**
 * ============================================================
 * NewItemsPage
 * ============================================================
 *
 * PURPOSE:
 *   Shows products flagged as new arrivals (isNew: true).
 *   Same layout as HomePage.
 *
 * HOW TO EDIT:
 *   - To add products here, set `isNew: true` in `src/data/products.js`
 *
 * ROUTE: "/new-items" (defined in App.jsx)
 * ============================================================
 */

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { useSidebar } from '../hooks/useSidebar';
import { pageVariants, staggerContainerVariants, itemVariants } from '../config/animations';
import { products } from '../data/products';

const NewItemsPage = () => {
    const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();

    // Filter products that are flagged as new
    const newProducts = products.filter(p => p.isNew);

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
                <section className="py-12 px-8 md:px-16 lg:px-[120px]">
                    {/* Section Header */}
                    <motion.div
                        className="bg-mint/30 backdrop-blur-sm rounded-2xl py-6 px-8 mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-white text-3xl font-bold text-center mb-2">New Items</h2>
                        <p className="text-white/80 text-sm text-center">
                            Giving update about new arrivals in our shop
                        </p>
                    </motion.div>

                    {/* Products Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                        variants={staggerContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {newProducts.map((product) => (
                            <motion.div key={product.id} variants={itemVariants}>
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </main>

            <Footer />
        </motion.div>
    );
};

export default NewItemsPage;
