/**
 * ============================================================
 * FeaturedProducts Component
 * ============================================================
 *
 * PURPOSE:
 *   Renders the "Featured Products" section on the HomePage.
 *   Displays a 3-column grid of ProductCards, a LimitedEditionCard,
 *   and a CountdownTimer.
 *
 * HOW IT WORKS:
 *   1. Imports all products from `src/data/products.js`
 *   2. Filters only those with `category: "featured"`
 *   3. Renders them in a 2-row, 3-column grid with stagger animations
 *
 * HOW TO EDIT:
 *   - To add more featured products, add entries with `category: "featured"`
 *     in `src/data/products.js`
 *   - To change the grid layout, edit the `grid-cols-*` Tailwind classes
 *   - To change animation speed, edit values in `src/config/animations.js`
 * ============================================================
 */

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import LimitedEditionCard from './LimitedEditionCard';
import CountdownTimer from './CountdownTimer';
import { products } from '../data/products';
import { staggerContainerVariants, itemVariants } from '../config/animations';

const FeaturedProducts = () => {
    // Filter to only show products marked as "featured"
    const featuredProducts = products.filter(p => p.category === 'featured');

    return (
        <section className="py-12 px-8 md:px-16 lg:px-[120px]">
            {/* Section Header */}
            <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <h2 className="text-white text-3xl font-bold mb-2 tracking-tight">Featured Products</h2>
                <p className="text-white/70 text-sm">
                    Discover the latest in premium sneakers and street wear
                </p>
            </motion.div>

            {/* Products Grid — 3 columns on large screens */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                variants={staggerContainerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Row 1: 2 Products + Limited Edition Card */}
                <motion.div variants={itemVariants}>
                    <ProductCard product={featuredProducts[0]} />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <ProductCard product={featuredProducts[1]} />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <LimitedEditionCard />
                </motion.div>

                {/* Row 2: 2 Products + Countdown Timer */}
                <motion.div variants={itemVariants}>
                    <ProductCard product={featuredProducts[2]} />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <ProductCard product={featuredProducts[3]} />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <CountdownTimer />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default FeaturedProducts;
