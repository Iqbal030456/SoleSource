import { motion } from 'framer-motion';
import NewsCard from './NewsCard';
import { newsArticles } from '../data/news';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

const LatestNews = () => {
    return (
        <section className="py-12 px-8 md:px-16 lg:px-[120px]">
            {/* Section Header */}
            <motion.div
                className="bg-mint/30 backdrop-blur-sm rounded-2xl py-6 px-8 mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-white text-3xl font-bold text-center mb-2">Latest News</h2>
                <p className="text-white/80 text-sm text-center">
                    Stay updated with the latest in streetwear and sneakers culture
                </p>
            </motion.div>

            {/* News Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {newsArticles.map((article) => (
                    <motion.div key={article.id} variants={itemVariants}>
                        <NewsCard article={article} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default LatestNews;

