/**
 * ============================================================
 * LatestNews Component
 * ============================================================
 *
 * PURPOSE:
 *   Renders the "Latest News" section on the NewsPage.
 *   Displays news articles in a responsive 3-column grid
 *   with staggered fade-in animations.
 *
 * HOW IT WORKS:
 *   1. Imports all articles from `src/data/news.js`
 *   2. Maps each article into a <NewsCard /> component
 *   3. Wraps everything in Framer Motion for animations
 *
 * HOW TO EDIT:
 *   - To add or change news articles, edit `src/data/news.js`
 *   - To change the section title/subtitle, edit the strings below
 *   - To change animation speed, edit the `staggerContainerVariants`
 *     values in `src/config/animations.js`
 * ============================================================
 */

import { motion } from 'framer-motion';
import NewsCard from './NewsCard';
import { newsArticles } from '../data/news';
import { staggerContainerVariants, itemVariants } from '../config/animations';

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

            {/* News Grid — 3 columns on large screens */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainerVariants}
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
