/**
 * ============================================================
 * SearchPage
 * ============================================================
 *
 * PURPOSE:
 *   Displays search results for products and news articles.
 *   The search query comes from the URL parameter `?q=<query>`.
 *
 * HOW IT WORKS:
 *   1. Reads the search query from the URL
 *   2. Filters products (by name/brand) and news (by title/excerpt)
 *   3. Displays matching results in separate grids
 *
 * HOW TO EDIT:
 *   - Search logic: the `useMemo` hooks below control what fields are searched
 *   - To search additional fields, add them to the `.filter()` conditions
 *
 * ROUTE: "/search" (defined in App.jsx)
 * ============================================================
 */

import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import NewsCard from '../components/NewsCard';
import { products } from '../data/products';
import { newsArticles } from '../data/news';
import { useSidebar } from '../hooks/useSidebar';
import { pageVariants, staggerContainerVariants, itemVariants } from '../config/animations';

const SearchPage = () => {
    // Read the `?q=` parameter from the URL
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();

    // Filter products that match the search query
    // `useMemo` caches the result so it only recalculates when `query` changes
    const filteredProducts = useMemo(() => {
        if (!query.trim()) return [];
        const lowerQuery = query.toLowerCase();
        return products.filter(product =>
            product.name.toLowerCase().includes(lowerQuery) ||
            product.brand.toLowerCase().includes(lowerQuery)
        );
    }, [query]);

    // Filter news articles that match the search query
    const filteredNews = useMemo(() => {
        if (!query.trim()) return [];
        const lowerQuery = query.toLowerCase();
        return newsArticles.filter(article =>
            article.title.toLowerCase().includes(lowerQuery) ||
            article.excerpt.toLowerCase().includes(lowerQuery)
        );
    }, [query]);

    const totalResults = filteredProducts.length + filteredNews.length;

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
                    {/* Search Header */}
                    <motion.div
                        className="text-center mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-white text-3xl font-bold mb-2">
                            Search Results
                        </h2>
                        <p className="text-white/80 text-sm">
                            {query ? (
                                <>Found <span className="font-bold text-lime">{totalResults}</span> results for "<span className="font-bold">{query}</span>"</>
                            ) : (
                                'Enter a search term to find products and news'
                            )}
                        </p>
                    </motion.div>

                    {/* No Results Message */}
                    {query && totalResults === 0 && (
                        <motion.div
                            className="text-center py-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <p className="text-white/60 text-lg">
                                No products or news found for "{query}"
                            </p>
                            <p className="text-white/40 text-sm mt-2">
                                Try searching for different keywords
                            </p>
                        </motion.div>
                    )}

                    {/* Products Results */}
                    {filteredProducts.length > 0 && (
                        <div className="mb-12">
                            <h3 className="text-white text-xl font-bold mb-4">
                                Products ({filteredProducts.length})
                            </h3>
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                variants={staggerContainerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {filteredProducts.map((product) => (
                                    <motion.div key={product.id} variants={itemVariants}>
                                        <ProductCard product={product} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    )}

                    {/* News Results */}
                    {filteredNews.length > 0 && (
                        <div>
                            <h3 className="text-white text-xl font-bold mb-4">
                                News ({filteredNews.length})
                            </h3>
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                variants={staggerContainerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {filteredNews.map((article) => (
                                    <motion.div key={article.id} variants={itemVariants}>
                                        <NewsCard article={article} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </motion.div>
    );
};

export default SearchPage;
