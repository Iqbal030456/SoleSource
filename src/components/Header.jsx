/**
 * ============================================================
 * Header Component
 * ============================================================
 *
 * PURPOSE:
 *   The top navigation bar shown on every page. Contains:
 *   - A hamburger menu button (opens the Sidebar)
 *   - The "SOLE SOURCE" logo text
 *   - A search bar (hidden on mobile, visible on sm+ screens)
 *
 * PROPS:
 *   onMenuClick  {Function}  - Called when the hamburger menu is clicked.
 *                               The parent page passes this to open the Sidebar.
 *
 * HOW TO EDIT:
 *   - To change the logo text, edit the string "SOLE SOURCE" below
 *   - To change the header background color, edit `bg-navy`
 *   - To change the search placeholder, edit the `placeholder` prop
 *   - The search navigates to `/search?q=<query>` when you press Enter
 *
 * USAGE:
 *   import Header from './components/Header';
 *   <Header onMenuClick={handleOpenSidebar} />
 * ============================================================
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ onMenuClick }) => {
    // Stores whatever the user types into the search bar
    const [searchQuery, setSearchQuery] = useState('');

    // React Router's navigation function — lets us change pages programmatically
    const navigate = useNavigate();

    /**
     * Triggered when the user presses a key inside the search input.
     * If the key is "Enter" and the input is not empty, navigate to
     * the search results page with the query as a URL parameter.
     */
    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            // encodeURIComponent makes the query URL-safe
            // (e.g. spaces become %20)
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    /**
     * Triggered when the user clicks the search icon.
     * Same behavior as pressing Enter.
     */
    const handleSearchClick = () => {
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <header className="bg-navy py-4 w-full flex items-center justify-between px-8 md:px-16 lg:px-[120px]">
            {/* Hamburger Menu Button — opens the Sidebar */}
            <button
                onClick={onMenuClick}
                className="transition-all duration-200 hover:opacity-80 cursor-pointer"
                aria-label="Open navigation menu"
            >
                <img src="/assets/menu-icon.png" alt="Menu" className="w-9 h-9" />
            </button>

            {/* Logo Text */}
            <div className="logo-text text-white text-xl md:text-2xl font-normal tracking-wider">
                SOLE SOURCE
            </div>

            {/* Search Bar — hidden on small screens (below 640px) */}
            <div className="hidden sm:flex bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2.5 items-center gap-3 w-72 md:w-96 border border-white/20 shadow-sm transition-all duration-200 focus-within:border-lime/50 focus-within:shadow-lg focus-within:shadow-lime/5">
                <img
                    src="/assets/search-icon.png"
                    alt="Search"
                    className="w-4 h-4 opacity-60 cursor-pointer hover:opacity-100 transition-opacity"
                    onClick={handleSearchClick}
                />
                <input
                    type="text"
                    placeholder="Search Products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearch}
                    className="search-input flex-1 outline-none text-gray-700 text-sm bg-transparent"
                />
            </div>
        </header>
    );
};

export default Header;
