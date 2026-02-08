import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ onMenuClick }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    const handleSearchClick = () => {
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <header className="bg-navy py-4 w-full flex items-center justify-between px-8 md:px-16 lg:px-[120px]">
            {/* Menu Button */}
            <button
                onClick={onMenuClick}
                className="transition-all duration-200 hover:opacity-80 cursor-pointer"
            >
                <img src="/assets/menu-icon.png" alt="Menu" className="w-9 h-9" />
            </button>

            {/* Logo Text */}
            <div className="logo-text text-white text-xl md:text-2xl font-normal tracking-wider">
                SOLE SOURCE
            </div>

            {/* Search Bar - More prominent */}
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
                    onKeyPress={handleSearch}
                    className="search-input flex-1 outline-none text-gray-700 text-sm bg-transparent"
                />
            </div>
        </header>
    );
};

export default Header;
