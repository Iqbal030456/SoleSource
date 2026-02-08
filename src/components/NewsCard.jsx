/**
 * NewsCard Component - Reusable news article card
 * 
 * Usage:
 * <NewsCard article={newsData} />
 */

const NewsCard = ({ article }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer h-full flex flex-col">
            {/* Article Image - Fixed height */}
            <div className="h-48 bg-gray-200 overflow-hidden flex-shrink-0">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-400 text-sm p-4 text-center">Image: ${article.title}</div>`;
                    }}
                />
            </div>

            {/* Article Content - Fixed height with flex grow */}
            <div className="p-4 flex flex-col flex-grow h-[140px]">
                {/* Date */}
                <p className="text-navy/60 text-xs mb-2 flex-shrink-0">{article.date}</p>

                {/* Title - Fixed 2 lines */}
                <h3 className="text-navy font-bold text-sm mb-2 line-clamp-2 min-h-[40px] flex-shrink-0">
                    {article.title}
                </h3>

                {/* Excerpt - Fixed 2 lines */}
                <p className="text-navy/70 text-xs line-clamp-2 min-h-[32px]">
                    {article.excerpt}
                </p>
            </div>
        </div>
    );
};

export default NewsCard;

