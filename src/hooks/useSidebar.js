/**
 * ============================================================
 * useSidebar Hook
 * ============================================================
 *
 * PURPOSE:
 *   A custom React hook that manages the sidebar open/close state.
 *   Every page that has a sidebar (Home, News, About, Search, Contact)
 *   was duplicating the same sidebar logic. This hook centralizes it.
 *
 * WHAT IT DOES:
 *   1. Tracks whether the sidebar is open with `useState`
 *   2. Adds/removes the `sidebar-open` class on <body> to prevent
 *      background scrolling when the sidebar is visible
 *   3. Automatically cleans up the body class when the page unmounts
 *      (this prevents a bug where navigating away with the sidebar
 *       open would leave the body scroll permanently locked)
 *
 * USAGE:
 *   import { useSidebar } from '../hooks/useSidebar';
 *
 *   const MyPage = () => {
 *       const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();
 *       return (
 *           <>
 *               <Header onMenuClick={openSidebar} />
 *               <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
 *           </>
 *       );
 *   };
 * ============================================================
 */

import { useState, useEffect } from 'react';

export const useSidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Sync the sidebar state with the body class.
    // This useEffect runs every time `isSidebarOpen` changes.
    useEffect(() => {
        if (isSidebarOpen) {
            // Prevent page from scrolling while sidebar is open
            document.body.classList.add('sidebar-open');
        } else {
            document.body.classList.remove('sidebar-open');
        }

        // Cleanup function: runs when the component unmounts.
        // This ensures the class is always removed, even if the
        // user navigates away while the sidebar is still open.
        return () => {
            document.body.classList.remove('sidebar-open');
        };
    }, [isSidebarOpen]);

    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);

    return { isSidebarOpen, openSidebar, closeSidebar };
};
