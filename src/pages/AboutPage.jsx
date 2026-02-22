/**
 * ============================================================
 * AboutPage
 * ============================================================
 *
 * PURPOSE:
 *   The "About Us" page. Explains what SoleSource is, its value
 *   propositions, and how it works for both shoppers and brands.
 *
 * SECTIONS:
 *   1. Hero — large headline with product collage
 *   2. Value Propositions — 3 feature highlights (Curated, Real-Time, Global)
 *   3. Additional Props — 3 more features (Free, Verified, Community)
 *   4. How It Works — split panel (Discover for shoppers / Promote for brands)
 *   5. CTA — call-to-action banner
 *
 * HOW TO EDIT:
 *   - To change value prop text/icons, edit the `valueProps` and
 *     `additionalProps` arrays below
 *   - To change "How it works" steps, edit `discoverSteps` and `promoteSteps`
 *   - To change hero text, edit the JSX in the "Hero Section" below
 *   - Page transition: configured in `src/config/animations.js`
 *
 * ROUTE: "/about" (defined in App.jsx)
 * ============================================================
 */

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useSidebar } from '../hooks/useSidebar';
import { pageVariants, fadeInUp } from '../config/animations';

// ------------------------------------
// Page-specific animation configs
// (used only on this page, not shared)
// ------------------------------------
const aboutPageVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,  // 150ms gap between each card's animation
            delayChildren: 0.2,     // Wait 200ms before first card starts
        },
    },
};

// ------------------------------------
// Content Configuration
// Edit these arrays to change what appears on the page
// ------------------------------------

/** Main value propositions — shown as 3 feature cards */
const valueProps = [
    {
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Curated Selection",
        description: "Every product we feature goes through our careful curation process. We only promote authentic items from trusted brands and verified retailers.",
        link: "Learn More"
    },
    {
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Real-Time Updates",
        description: "Get instant notifications on the latest drops, restocks, and exclusive releases. Our platform keeps you ahead of the curve with up-to-the-minute product information.",
        link: "Learn More"
    },
    {
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Global Access",
        description: "Connect with sneaker drops and releases from around the world. We aggregate products from over 200+ retailers and brands globally.",
        link: "Learn More"
    },
];

/** Secondary value props — smaller cards below the main ones */
const additionalProps = [
    {
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "100% Free",
        description: "No subscription fees, no hidden charges. We earn through affiliate partnerships, not your wallet. Discover sneakers without spending a dime."
    },
    {
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Verified Links",
        description: "All links lead directly to official retailers and authorized resellers. No sketchy redirects, no scams – just straight access to legit products."
    },
    {
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
        ),
        title: "Community First",
        description: "Join thousands of sneakerheads who trust Sole Source for their daily dose of sneaker news, drops, and exclusive releases."
    },
];

/** "How it works" steps for sneaker enthusiasts (left panel) */
const discoverSteps = [
    { number: "1", title: "Browse Our Collection", description: "Explore our curated selection of the latest and most sought-after sneakers and streetwear." },
    { number: "2", title: "Get the Details", description: "View detailed information including retail prices, release dates, and available sizes." },
    { number: "3", title: "Shop Direct", description: "Click through to purchase directly from verified retailers with confidence." },
];

/** "How it works" steps for brands/sellers (right panel) */
const promoteSteps = [
    { number: "1", title: "Partner With Us", description: "Brands and retailers can reach our engaged community of sneaker enthusiasts." },
    { number: "2", title: "Get Featured", description: "Your products get premium visibility across our platform and social channels." },
    { number: "3", title: "Grow Your Reach", description: "Connect with passionate buyers ready to cop your latest releases." },
];

const AboutPage = () => {
    const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();

    return (
        <motion.div
            className="min-h-screen flex flex-col bg-white"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={aboutPageVariants}
        >
            <Header onMenuClick={openSidebar} />
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

            <main className="flex-1">
                {/* ===== Hero Section ===== */}
                <section className="bg-[#0a1628] text-white py-16 lg:py-24">
                    <div className="container mx-auto px-8 lg:px-[120px]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left — Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                            >
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                    The Ultimate
                                    <br />
                                    <span className="text-lime">Sneaker</span>
                                    <br />
                                    Promotion Hub
                                </h1>
                                <p className="text-white/70 text-lg mb-8 max-w-lg">
                                    We don't sell sneakers – we help you find them. Our mission is to connect sneakerheads with the most coveted releases through curated promotions and real-time updates.
                                </p>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-4">
                                    <motion.a
                                        href="#how-it-works"
                                        className="inline-flex items-center gap-2 bg-lime text-navy font-bold py-3 px-6 rounded-lg hover:bg-lime/90 transition-colors"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span>Our Process</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </motion.a>
                                    <motion.a
                                        href="#discover"
                                        className="inline-flex items-center gap-2 border-2 border-lime text-lime font-bold py-3 px-6 rounded-lg hover:bg-lime/10 transition-colors"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span>For Shoppers</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </motion.a>
                                    <motion.a
                                        href="#promote"
                                        className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span>For Brands</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </motion.a>
                                </div>
                            </motion.div>

                            {/* Right — Product Collage */}
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                <div className="relative w-full aspect-square max-w-md mx-auto">
                                    {/* Background glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-lime/20 via-transparent to-mint/20 rounded-3xl blur-3xl" />

                                    {/* Product grid */}
                                    <div className="relative grid grid-cols-2 gap-4 p-8">
                                        {[1, 2, 3, 4].map((num) => (
                                            <motion.div
                                                key={num}
                                                className={`${num % 2 === 0 ? 'bg-lime/20' : 'bg-white/10'} backdrop-blur-sm rounded-2xl overflow-hidden aspect-square`}
                                                whileHover={{ scale: 1.05, y: -5 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <img
                                                    src={`https://picsum.photos/seed/sneaker${num}/200/200`}
                                                    alt="Sneaker"
                                                    className="w-full h-full object-cover"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ===== Value Propositions ===== */}
                <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="how-it-works">
                    <div className="container mx-auto px-8 lg:px-[120px]">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {valueProps.map((prop, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="text-center group"
                                >
                                    <div className="inline-flex items-center justify-center w-20 h-20 mb-6 text-lime group-hover:scale-110 transition-transform duration-300">
                                        {prop.icon}
                                    </div>
                                    <h3 className="text-navy text-xl font-bold mb-4">{prop.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">{prop.description}</p>
                                    <a href="#" className="inline-flex items-center gap-2 text-lime font-semibold hover:gap-3 transition-all">
                                        {prop.link}
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ===== Additional Value Props ===== */}
                <section className="py-16 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-8 lg:px-[120px]">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {additionalProps.map((prop, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="flex flex-col items-center text-center"
                                >
                                    <div className="text-navy mb-4">
                                        {prop.icon}
                                    </div>
                                    <h3 className="text-navy text-lg font-bold mb-2">{prop.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{prop.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ===== How It Works — Split Section ===== */}
                <section className="relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left — For Shoppers (Light background) */}
                        <motion.div
                            id="discover"
                            className="bg-gray-100 py-16 lg:py-24 px-8 lg:px-16"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-lime font-bold text-sm uppercase tracking-widest mb-2">How It Works</p>
                            <h2 className="text-navy text-4xl lg:text-5xl font-bold mb-12">DISCOVER</h2>

                            <div className="space-y-8">
                                {discoverSteps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex gap-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 }}
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-bold text-xl">
                                            {step.number}
                                        </div>
                                        <div>
                                            <h3 className="text-navy font-bold text-lg mb-2">{step.title}</h3>
                                            <p className="text-gray-600">{step.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-10 flex justify-center">
                                <svg className="w-6 h-6 text-navy animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>
                        </motion.div>

                        {/* Right — For Brands (Dark background) */}
                        <motion.div
                            id="promote"
                            className="bg-[#0a1628] py-16 lg:py-24 px-8 lg:px-16"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-lime font-bold text-sm uppercase tracking-widest mb-2">How It Works</p>
                            <h2 className="text-white text-4xl lg:text-5xl font-bold mb-12">PROMOTE</h2>

                            <div className="space-y-8">
                                {promoteSteps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex gap-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 }}
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 border-2 border-lime text-lime rounded-full flex items-center justify-center font-bold text-xl">
                                            {step.number}
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                                            <p className="text-white/60">{step.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-10 flex justify-center">
                                <svg className="w-6 h-6 text-lime animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>
                        </motion.div>
                    </div>

                    {/* Center Decorative Circle */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <motion.div
                            className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center"
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-navy">HOW</div>
                                <div className="text-xs text-gray-500">IT WORKS</div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ===== CTA Section ===== */}
                <section className="py-10 gradient-bg">
                    <div className="container mx-auto px-8 lg:px-[120px] text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                                Ready to Discover Your Next Grail?
                            </h2>
                            <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
                                Join thousands of sneakerheads who trust Sole Source for authentic sneaker discoveries.
                            </p>
                            <motion.a
                                href="/"
                                className="inline-block bg-lime text-navy font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-lime/25 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Exploring
                            </motion.a>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </motion.div>
    );
};

export default AboutPage;
