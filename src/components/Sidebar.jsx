/**
 * ============================================================
 * Sidebar Component
 * ============================================================
 *
 * PURPOSE:
 *   The slide-in navigation menu that appears when the user
 *   clicks the hamburger menu in the Header. Contains links
 *   to all main pages.
 *
 * PROPS:
 *   isOpen   {boolean}   - Whether the sidebar is currently visible
 *   onClose  {Function}  - Called when the user clicks the close
 *                           button or the dark overlay behind the sidebar
 *
 * HOW TO EDIT:
 *   - To add/remove/rename menu links, edit the `menuItems` array below.
 *     Each item needs a `name` (display text) and `href` (URL path).
 *   - The sidebar slides in from the left using CSS classes defined
 *     in `src/index.css` (the `.sidebar` and `.overlay` classes).
 *
 * USAGE:
 *   import Sidebar from './components/Sidebar';
 *   <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
 * ============================================================
 */

import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
    /**
     * Menu Items Configuration
     * ────────────────────────
     * Add, remove, or reorder items here to change the sidebar navigation.
     * `name` = what the user sees
     * `href` = which route/page it links to (must match a route in App.jsx)
     */
    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'News', href: '/news' },
        { name: 'About', href: '/about' },
        { name: 'New Items', href: '/new-items' },
        { name: 'Popular Items', href: '/popular' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <>
            {/* Dark Overlay — covers the rest of the screen when sidebar is open */}
            {/* Clicking it closes the sidebar */}
            <div
                className={`overlay ${isOpen ? 'active' : ''}`}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Sidebar Panel */}
            <div
                className={`sidebar ${isOpen ? 'active' : ''}`}
                role="navigation"
                aria-label="Main navigation"
            >
                {/* Sidebar Header — Logo + Close Button */}
                <div className="flex items-center justify-center gap-4 mb-12 mt-5 relative">
                    <img src="/assets/logo-sidebar.png" alt="Logo" className="w-20 h-20 flex-shrink-0" />
                    <div className="flex flex-col">
                        <div className="text-white font-opensans text-[28px] leading-tight tracking-wide">SOLE</div>
                        <div className="text-white font-opensans text-[28px] leading-tight tracking-wide">SOURCE</div>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="flex-shrink-0 transition-transform hover:scale-110"
                        aria-label="Close navigation menu"
                    >
                        <div className="w-10 h-10 bg-lime flex items-center justify-center rounded-lg rotate-45 shadow-md">
                            <img src="/assets/close-icon.png" alt="Close" className="w-5 h-5 -rotate-45" />
                        </div>
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-6">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            onClick={onClose}
                            className="flex items-center justify-between text-white font-inter font-semibold text-lg py-3 hover:opacity-80 transition-opacity"
                        >
                            <span>{item.name}</span>
                            <img src="/assets/arrow-right.png" alt="Arrow" className="w-[18px] h-[18px]" />
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
