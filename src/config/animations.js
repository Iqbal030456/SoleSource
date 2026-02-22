/**
 * ============================================================
 * Animation Configuration for SoleSource
 * ============================================================
 *
 * This file contains all shared Framer Motion animation presets
 * used across pages and components. Instead of copy-pasting
 * animation objects into every file, import them from here.
 *
 * HOW TO EDIT:
 * - `duration` = how long the animation takes in seconds (lower = faster)
 * - `y` = vertical slide distance in pixels (positive = down, negative = up)
 * - `ease` = the acceleration curve; the array is a cubic-bezier curve
 * - `staggerChildren` = delay between each child's animation (seconds)
 * - `delayChildren` = wait time before the first child starts animating
 *
 * USAGE EXAMPLE:
 *   import { pageVariants } from '../config/animations';
 *   <motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit">
 * ============================================================
 */

// ------------------------------------
// Page Transition Animations
// Used by every page (HomePage, NewsPage, etc.)
// Controls the fade-in/out when navigating between pages
// ------------------------------------
export const pageVariants = {
    initial: {
        opacity: 0,  // Start invisible
        y: 20,       // Start 20px below final position
    },
    enter: {
        opacity: 1,  // Fade in to fully visible
        y: 0,        // Slide up to final position
        transition: {
            duration: 0.4,  // 0.4 seconds to complete
            ease: [0.25, 0.46, 0.45, 0.94],  // Smooth ease-out curve
        },
    },
    exit: {
        opacity: 0,   // Fade out
        y: -20,       // Slide up 20px while fading
        transition: {
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

// ------------------------------------
// Staggered Container Animations
// Wraps a list of items so they animate in one-by-one
// ------------------------------------
export const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,   // 80ms gap between each child
            delayChildren: 0.15,     // Wait 150ms before first child starts
        },
    },
};

// ------------------------------------
// Individual Item Animation (used inside stagger containers)
// Each card/item slides up and fades in
// ------------------------------------
export const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,  // Start 20px below
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

// ------------------------------------
// Fade-In-Up Animation
// Slower, more dramatic version for hero sections
// ------------------------------------
export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};
