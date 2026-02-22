/**
 * ============================================================
 * NewsCard Component
 * ============================================================
 *
 * PURPOSE:
 *   Displays a single news article as a card with an image,
 *   date, title, and excerpt. Used on the News and Search pages.
 *
 * PROPS (data this component needs):
 *   article  {Object}  - A news article from `src/data/news.js`
 *     ├── id       {number}  - Unique identifier
 *     ├── title    {string}  - Headline text
 *     ├── excerpt  {string}  - Short preview paragraph
 *     ├── image    {string}  - Path to the article image
 *     └── date     {string}  - Published date (e.g. "September 26, 2025")
 *
 * HOW TO EDIT:
 *   - To change news content, edit `src/data/news.js`
 *   - To change card height/layout, adjust the Tailwind classes below
 *   - `line-clamp-2` limits text to 2 lines (prevents overflow)
 *
 * USAGE:
 *   import NewsCard from './components/NewsCard';
 *   <NewsCard article={myArticleObject} />
 * ============================================================
 */

import { useState } from 'react';

const NewsCard = ({ article }) => {
    // Destructure article props for cleaner template
    const { title, excerpt, image, date } = article;

    // Safe image error handling via React state
    // ⚠️ SAFETY NOTE: We use React state instead of innerHTML
    //    to prevent Cross-Site Scripting (XSS) vulnerabilities.
    const [imgError, setImgError] = useState(false);

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer h-full flex flex-col">
            {/* Article Image — Fixed height container */}
            <div className="h-48 bg-gray-200 overflow-hidden flex-shrink-0">
                {imgError ? (
                    // Fallback: shown when the image path is broken
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm p-4 text-center">
                        Image: {title}
                    </div>
                ) : (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        onError={() => setImgError(true)}
                    />
                )}
            </div>

            {/* Article Content */}
            <div className="p-4 flex flex-col flex-grow h-[140px]">
                {/* Date */}
                <p className="text-navy/60 text-xs mb-2 flex-shrink-0">{date}</p>

                {/* Title — limited to 2 lines to keep cards uniform */}
                <h3 className="text-navy font-bold text-sm mb-2 line-clamp-2 min-h-[40px] flex-shrink-0">
                    {title}
                </h3>

                {/* Excerpt — limited to 2 lines */}
                <p className="text-navy/70 text-xs line-clamp-2 min-h-[32px]">
                    {excerpt}
                </p>
            </div>
        </div>
    );
};

export default NewsCard;
