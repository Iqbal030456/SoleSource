/**
 * ============================================================
 * Footer Component
 * ============================================================
 *
 * PURPOSE:
 *   The site-wide footer shown at the bottom of every page.
 *   Contains the logo, social media links, and copyright text.
 *
 * HOW TO EDIT:
 *   - Social media links: update the `href` attributes below
 *   - Copyright year: change "©2025" text
 *   - Logo image: replace `/assets/logo.png`
 *   - To add a new social icon, copy one of the <a> blocks and
 *     change the `href` and image source
 * ============================================================
 */

const Footer = () => {
    return (
        <footer className="bg-navy w-full relative px-8 md:px-16 lg:px-[120px] pt-12 pb-8 min-h-[220px]">
            {/* Decorative Circles — purely visual, no interaction */}
            <div className="absolute top-0 right-0 w-[300px] h-[220px] overflow-hidden pointer-events-none z-0 opacity-80">
                <img
                    src="/assets/footer-circles.png"
                    alt=""
                    className="w-full h-full object-cover object-top-right"
                />
            </div>

            <div className="max-w-full mx-auto relative z-10">
                {/* Logo and Social Media Row */}
                <div className="flex items-center mb-8 flex-wrap gap-4">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img src="/assets/logo.png" alt="Logo" className="w-[80px] h-[32px]" />
                        <div className="footer-text text-white font-normal tracking-wider text-[32px] leading-[32px]">
                            SOLE SOURCE
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex items-center gap-1.5 ml-0 md:ml-10">
                        <a
                            href="https://www.instagram.com/solesource67"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg transition-all duration-200 hover:bg-white/5"
                            aria-label="Follow us on Instagram"
                        >
                            <img src="/assets/instagram-icon.png" alt="Instagram" className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity" />
                        </a>
                        <a
                            href="https://wa.me/6287832043555"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg transition-all duration-200 hover:bg-white/5"
                            aria-label="Contact us on WhatsApp"
                        >
                            <img src="/assets/whatsapp-icon.png" alt="WhatsApp" className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity" />
                        </a>
                        <a
                            href="https://x.com/SoleSource6277"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg transition-all duration-200 hover:bg-white/5"
                            aria-label="Follow us on Twitter"
                        >
                            <img src="/assets/twitter-icon.png" alt="Twitter" className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="border-t border-lime/60 mb-5 mr-0 lg:mr-[320px]" />

                {/* Copyright */}
                <div className="copyright-text text-sm text-center pr-0 lg:pr-[320px] opacity-80">
                    ©2025 SOLE SOURCE
                </div>
            </div>
        </footer>
    );
};

export default Footer;
