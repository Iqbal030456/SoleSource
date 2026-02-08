import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import LimitedEditionCard from './LimitedEditionCard';
import CountdownTimer from './CountdownTimer';
import { products } from '../data/products';

// Tighter, snappier animations
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

const FeaturedProducts = () => {
    // Filter hanya produk featured
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

            {/* Products Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Row 1: 2 Products + Limited Edition */}
                <motion.div variants={itemVariants}>
                    <ProductCard product={featuredProducts[0]} />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <ProductCard product={featuredProducts[1]} />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <LimitedEditionCard />
                </motion.div>

                {/* Row 2: 2 Products + Countdown */}
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
