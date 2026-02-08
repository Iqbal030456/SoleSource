import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    enter: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

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
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        countryCode: '+62',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [openFaq, setOpenFaq] = useState(null);

    const openSidebar = () => {
        setIsSidebarOpen(true);
        document.body.classList.add('sidebar-open');
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
        document.body.classList.remove('sidebar-open');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitStatus('success');
        setIsSubmitting(false);
        setFormData({ name: '', email: '', countryCode: '+62', phone: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
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
                {/* Contact Section - Split Layout */}
                <section className="py-16 px-8 md:px-16 lg:px-[120px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Side - Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                                Contact Us
                            </h1>
                            <p className="text-white/60 text-base mb-6">
                                Email, call, or complete the form to learn how Sole Source can help you find the best sneaker deals.
                            </p>

                            <div className="mb-8">
                                <a href="mailto:info@solesource.com" className="text-lime hover:text-lime/80 transition-colors text-sm">
                                    info@solesource.com
                                </a>
                                <p className="text-white/50 text-sm mt-2">021-123-4567</p>
                                <a href="#" className="text-lime hover:text-lime/80 transition-colors text-sm block mt-2 underline">
                                    Customer Support
                                </a>
                            </div>

                            {/* Contact Methods Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                                {contactMethods.map((method, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                    >
                                        <h3 className="text-white font-semibold text-sm mb-2">
                                            {method.title}
                                        </h3>
                                        <p className="text-white/50 text-xs leading-relaxed mb-2">
                                            {method.description}
                                        </p>
                                        <a href={`mailto:${method.email}`} className="text-lime text-xs hover:underline">
                                            {method.email}
                                        </a>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Side - Contact Form */}
                        <motion.div
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <h2 className="text-white text-xl font-bold mb-2">
                                Get in Touch
                            </h2>
                            <p className="text-white/50 text-sm mb-6">
                                You can reach us anytime
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First name"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-lime/50 transition-all"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last name"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-lime/50 transition-all"
                                        required
                                    />
                                </div>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your email"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-lime/50 transition-all"
                                    required
                                />

                                <div className="flex gap-2">
                                    <select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        className="w-24 px-3 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-lime/50 transition-all"
                                    >
                                        <option value="+62" className="bg-navy">+62</option>
                                        <option value="+1" className="bg-navy">+1</option>
                                        <option value="+44" className="bg-navy">+44</option>
                                        <option value="+81" className="bg-navy">+81</option>
                                    </select>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone number"
                                        className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-lime/50 transition-all"
                                    />
                                </div>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we help?"
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-lime/50 transition-all resize-none"
                                    required
                                />

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 bg-lime text-navy font-bold text-sm rounded-lg hover:bg-lime/90 transition-all disabled:opacity-50"
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </motion.button>

                                {submitStatus === 'success' && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-lime text-sm text-center"
                                    >
                                        ✓ Message sent successfully!
                                    </motion.p>
                                )}
                            </form>

                            <p className="text-white/30 text-xs text-center mt-6">
                                By contacting us, you agree to our{' '}
                                <a href="#" className="text-lime hover:underline">Terms of Service</a>
                                {' '}and{' '}
                                <a href="#" className="text-lime hover:underline">Privacy Policy</a>
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Location Section */}
                <section className="py-16 px-8 md:px-16 lg:px-[120px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Map Placeholder */}
                        <motion.div
                            className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden border border-white/10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24899726863!2d106.7290917!3d-6.2297419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
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
                                    Jakarta, Indonesia
                                </p>
                                <a href="#" className="text-lime text-xs font-medium mt-2 block hover:underline">
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

                {/* FAQ Section */}
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
                                href="mailto:info@solesource.com"
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

                {/* CTA Section */}
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
