import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
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
            {/* Overlay */}
            <div
                className={`overlay ${isOpen ? 'active' : ''}`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? 'active' : ''}`}>
                {/* Sidebar Header */}
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
                    >
                        <div className="w-10 h-10 bg-lime flex items-center justify-center rounded-lg rotate-45 shadow-md">
                            <img src="/assets/close-icon.png" alt="Close" className="w-5 h-5 -rotate-45" />
                        </div>
                    </button>
                </div>

                {/* Menu Items */}
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
