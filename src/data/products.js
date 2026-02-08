// Product data - Edit this file to add/remove/modify products
// No database needed! Just edit this file and the changes will appear

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

// Limited Edition product
export const limitedEdition = {
    id: 100,
    name: "Limited Edition Drop",
    description: "Get exclusive access to our latest collaboration.",
    image: "/assets/products/limited-edition.png",
    ctaText: "Shop Now!",
};

// Next Drop countdown (set your target date here)
export const nextDrop = {
    // Format: Year, Month (0-11), Day, Hour, Minute
    targetDate: new Date(2026, 1, 12, 12, 0), // Feb 12, 2026 12:00
    label: "Next Drop",
};
