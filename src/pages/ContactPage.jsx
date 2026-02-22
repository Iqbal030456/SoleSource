/**
 * ============================================================
 * ContactPage
 * ============================================================
 *
 * PURPOSE:
 *   The "Contact Us" page. Contains a contact form, FAQ section,
 *   a Google Maps embed, and various contact methods.
 *
 * SECTIONS:
 *   1. Contact Info + Form — split layout with form on the right
 *   2. Location — Google Maps embed with info card overlay
 *   3. FAQ — accordion-style frequently asked questions
 *   4. CTA — call-to-action banner
 *
 * HOW TO EDIT:
 *   - Contact emails: edit the `contactMethods` array below
 *   - FAQ questions: edit the `faqs` array below
 *   - Phone number: edit the phone text in the JSX
 *   - Map location: change the Google Maps embed URL
 *   - Form currently does NOT send real emails (it simulates a
 *     1.5s delay and shows success). To connect a real backend,
 *     replace the `handleSubmit` function logic.
 *
 * ROUTE: "/contact" (defined in App.jsx)
 * ============================================================
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useSidebar } from '../hooks/useSidebar';
import { pageVariants, itemVariants } from '../config/animations';

// ------------------------------------
// Content Configuration
// Edit these arrays to change what appears on the page
// ------------------------------------

/** Contact methods shown on the left side */
const contactMethods = [
    {
        title: 'Customer Support',
        description: 'Our support team is available daily to help you with any questions or issues.',
        email: 'support@solesource.com',
    },
    {
        title: 'Feedback and Suggestions',
        description: 'We value your feedback! Let us know how we can improve your experience.',
        email: 'feedback@solesource.com',
    },
    {
        title: 'Media Inquiries',
        description: 'For media-related questions or press inquiries, please reach out.',
        email: 'media@solesource.com',
    },
];

/** FAQ items — add/remove objects here to change the accordion */
const faqs = [
    {
        question: 'What makes Sole Source different from other sneaker platforms?',
        answer: 'Sole Source focuses on connecting sneakerheads with the best promotions and releases. We curate deals from trusted sellers and provide real-time updates on upcoming drops.',
    },
    {
        question: 'How can I get notified about new releases?',
        answer: 'Follow us on Instagram and Twitter for instant notifications about the latest sneaker releases and exclusive promotions. You can also enable notifications through our platform.',
    },
    {
        question: 'Do you verify the authenticity of products?',
        answer: 'Yes! All featured promotions come from verified sellers. We work with trusted partners to ensure every product listed meets our quality and authenticity standards.',
    },
    {
        question: 'How do I partner with Sole Source for promotions?',
        answer: 'Brands and sellers can reach out to our business team at business@solesource.com. We offer various partnership opportunities for promotional campaigns.',
    },
];

const ContactPage = () => {
    const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();

    // FAQ accordion state — tracks which FAQ index is currently open
    const [openFaq, setOpenFaq] = useState(null);

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
                {/* ===== Contact Section — Full Width Info ===== */}
                <section className="py-16 px-8 md:px-16 lg:px-[120px]">
                    {/* Page Title */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Contact Us
                        </h1>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Have questions about sneaker drops, promotions, or partnerships? We're here to help. Reach out through any of the channels below.
                        </p>
                    </motion.div>

                    {/* Main Contact Info — Big & Prominent */}
                    <motion.div
                        className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {/* Email */}
                            <div className="text-center md:text-left">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-lime/20 rounded-xl mb-4">
                                    <svg className="w-7 h-7 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-bold text-xl mb-2">Email</h3>
                                <a href="mailto:info@solesource.com" className="text-lime text-lg hover:text-lime/80 transition-colors block">
                                    info@solesource.com
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="text-center md:text-left">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-lime/20 rounded-xl mb-4">
                                    <svg className="w-7 h-7 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-bold text-xl mb-2">Phone</h3>
                                <p className="text-white/70 text-lg">021-123-4567</p>
                            </div>

                            {/* Social Media */}
                            <div className="text-center md:text-left">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-lime/20 rounded-xl mb-4">
                                    <svg className="w-7 h-7 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-bold text-xl mb-2">Social Media</h3>
                                <div className="flex items-center gap-3 justify-center md:justify-start">
                                    <a href="https://www.instagram.com/solesource67" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-lime transition-colors text-lg">Instagram</a>
                                    <span className="text-white/30">•</span>
                                    <a href="https://wa.me/6287832043555" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-lime transition-colors text-lg">WhatsApp</a>
                                    <span className="text-white/30">•</span>
                                    <a href="https://x.com/SoleSource6277" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-lime transition-colors text-lg">Twitter</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Methods — 3 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-lime/30 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                            >
                                <h3 className="text-white font-bold text-lg mb-3">
                                    {method.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed mb-4">
                                    {method.description}
                                </p>
                                <a href={`mailto:${method.email}`} className="text-lime text-base font-medium hover:underline">
                                    {method.email}
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ===== Location Section ===== */}
                <section className="py-16 px-8 md:px-16 lg:px-[120px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Map */}
                        <motion.div
                            className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden border border-white/10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126588.46338426038!2d111.37340062831038!3d-7.4423405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79e6027a001a15%3A0x4027a76e35327c0!2sNgawi%2C%20Ngawi%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                                className="w-full h-full border-0 grayscale opacity-80"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Sole Source Location"
                            />
                            {/* Map Overlay Card */}
                            <motion.div
                                className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-[200px]"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 bg-lime rounded-full flex items-center justify-center">
                                        <span className="text-navy text-xs font-bold">SS</span>
                                    </div>
                                    <div>
                                        <p className="text-navy font-bold text-sm">Sole Source HQ</p>
                                        <p className="text-navy/60 text-xs">Your Sneaker Hub</p>
                                    </div>
                                </div>
                                <p className="text-navy/70 text-xs">
                                    Ngawi, Jawa Timur
                                </p>
                                <a href="https://maps.app.goo.gl/44ckvEac8ptdeCoMA" target="_blank" rel="noopener noreferrer" className="text-lime text-xs font-medium mt-2 block hover:underline">
                                    Open Google Maps →
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Location Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            <p className="text-lime text-sm font-medium mb-2 uppercase tracking-wider">
                                Our Location
                            </p>
                            <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
                                Connecting Near and Far
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Headquarters</h3>
                                    <div className="text-white/60 text-sm space-y-1">
                                        <p>Sole Source</p>
                                        <p>Jakarta, Indonesia</p>
                                        <p>Serving sneakerheads worldwide</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ===== FAQ Section ===== */}
                <section className="py-16 px-8 md:px-16 lg:px-[120px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* FAQ Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-lime text-sm font-medium mb-2 uppercase tracking-wider">
                                FAQ
                            </p>
                            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                                Do you have any<br />questions for us?
                            </h2>
                            <p className="text-white/60 text-sm mb-6">
                                If there are questions you want to ask, we will answer all your questions.
                            </p>
                            <motion.a
                                href="https://wa.me/6287832043555"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-lime text-navy font-bold text-sm py-3 px-6 rounded-lg hover:bg-lime/90 transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Ask Question
                            </motion.a>
                        </motion.div>

                        {/* FAQ Accordion */}
                        <div className="space-y-3">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    className="border border-white/10 rounded-xl overflow-hidden"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
                                    >
                                        <span className="text-white text-sm font-medium pr-4">
                                            {faq.question}
                                        </span>
                                        <motion.span
                                            className="text-lime text-xl flex-shrink-0"
                                            animate={{ rotate: openFaq === index ? 45 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            +
                                        </motion.span>
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <p className="px-4 pb-4 text-white/60 text-sm">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== CTA Section ===== */}
                <section className="py-16 px-8 md:px-16 lg:px-[120px]">
                    <motion.div
                        className="text-center py-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                            Ready to find your next grail?
                        </h2>
                        <motion.a
                            href="/"
                            className="inline-block bg-lime text-navy font-bold py-3 px-8 rounded-full mt-4 hover:bg-lime/90 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started
                        </motion.a>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </motion.div>
    );
};

export default ContactPage;
