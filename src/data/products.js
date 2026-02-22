/**
 * ============================================================
 * Product Data
 * ============================================================
 *
 * This file is your "database" for products. Edit the arrays
 * below to add, remove, or change products on the website.
 * No coding knowledge needed — just follow the pattern!
 *
 * HOW TO ADD A NEW PRODUCT:
 *   1. Copy one of the existing product objects (the { } block)
 *   2. Paste it at the end of the array (before the closing ])
 *   3. Change the values (id, name, brand, image, etc.)
 *   4. Make sure each product has a unique `id` number
 *   5. Put the product image in the `/public/assets/products/` folder
 *
 * FIELDS EXPLAINED:
 *   id        — Unique number for the product (1, 2, 3, etc.)
 *   name      — Display name (shown below the product image)
 *   brand     — Brand tag text (shown in the top-left corner of the card)
 *   image     — Path to the product image (must start with /assets/)
 *   discount  — Promotional text (e.g. "UP to 20% OFF")
 *   category  — Used for filtering. Set to "featured" to show on homepage
 *   isNew     — Set to true to flag as a new arrival
 *   isPopular — Set to true to flag as popular
 * ============================================================
 */

export const products = [
    {
        id: 1,
        name: "Puma Speedcat",
        brand: "PUMA SPEEDCAT",
        image: "/assets/products/puma-speedcat.png",
        discount: "UP to 20% OFF",
        category: "featured",
        isNew: false,
        isPopular: true,
    },
    {
        id: 2,
        name: "Jordan 11",
        brand: "JORDAN 11",
        image: "/assets/products/jordan-11.png",
        discount: "UP to 15% OFF",
        category: "featured",
        isNew: true,
        isPopular: true,
    },
    {
        id: 3,
        name: "Gel-Rocket 12",
        brand: "GEL-ROCKET 12",
        image: "/assets/products/asics-gel-rocket.png",
        discount: "UP to 30% OFF",
        category: "featured",
        isNew: false,
        isPopular: false,
    },
    {
        id: 4,
        name: "Nike Air Force 1 '07",
        brand: "Nike Air Force 1 '07",
        image: "/assets/products/nike-air-force.png",
        discount: "UP to 10% OFF",
        category: "featured",
        isNew: false,
        isPopular: true,
    },
];

/**
 * Limited Edition Product
 * ────────────────────────
 * This product gets its own special card on the homepage.
 * To change what shows up, just edit the values below.
 */
export const limitedEdition = {
    id: 100,
    name: "Limited Edition Drop",
    description: "Get exclusive access to our latest collaboration.",
    image: "/assets/products/limited-edition.png",
    ctaText: "Shop Now!",    // Button text
};

/**
 * Next Drop Countdown
 * ────────────────────
 * Set your target date here. The CountdownTimer component
 * will automatically calculate the remaining days and hours.
 *
 * IMPORTANT: Month is 0-indexed!
 *   January = 0, February = 1, March = 2, ... December = 11
 *
 * Format: new Date(Year, Month, Day, Hour, Minute)
 */
export const nextDrop = {
    targetDate: new Date(2026, 1, 12, 12, 0),  // Feb 12, 2026 at 12:00 PM
    label: "Next Drop",
};
