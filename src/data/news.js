/**
 * ============================================================
 * News Data
 * ============================================================
 *
 * This file is your "database" for news articles. Edit the array
 * below to add, remove, or change news on the website.
 *
 * HOW TO ADD A NEW ARTICLE:
 *   1. Copy one of the existing article objects (the { } block)
 *   2. Paste it at the end of the array (before the closing ])
 *   3. Change the values (id, title, excerpt, etc.)
 *   4. Make sure each article has a unique `id` number
 *   5. Put the article image in the `/public/assets/news/` folder
 *
 * FIELDS EXPLAINED:
 *   id        — Unique number for the article
 *   title     — Headline text shown on the card
 *   excerpt   — Short preview paragraph (1-2 sentences)
 *   image     — Path to the article image (must start with /assets/)
 *   date      — Published date as a readable string
 *   category  — For filtering (e.g. "collaboration", "collection", "news")
 * ============================================================
 */

export const newsArticles = [
    {
        id: 1,
        title: "Travis Scott x Jordan Brand Announces New Collaboration",
        excerpt: "The highly anticipated collaboration between...",
        image: "/assets/news/travis-jordan.png",
        date: "September 26, 2025",
        category: "collaboration",
    },
    {
        id: 2,
        title: "Supreme Fall/Winter 2025 Collection Preview",
        excerpt: "Supreme unveils its Fall/Winter 2025 collection...",
        image: "/assets/news/supreme-collection.png",
        date: "September 26, 2025",
        category: "collection",
    },
    {
        id: 3,
        title: "Yeezy Returns: What We Know So Far",
        excerpt: "After months of speculation, Yeezy is making its...",
        image: "/assets/news/yeezy-returns.png",
        date: "September 24, 2025",
        category: "news",
    },
];
