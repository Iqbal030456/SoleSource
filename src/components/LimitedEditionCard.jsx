/**
 * ============================================================
 * LimitedEditionCard Component
 * ============================================================
 *
 * PURPOSE:
 *   Displays the special "Limited Edition" product card on the
 *   home page grid. It pulls its data from `src/data/products.js`.
 *
 * CONFIG:
 *   To change the limited edition product details (name, image,
 *   description, button text), edit the `limitedEdition` object
 *   in `src/data/products.js`.
 *
 * HOW TO EDIT:
 *   - Card background: change `bg-white` below
 *   - Button color: change `bg-navy` on the <button> element
 *   - Image size: change `h-20` class on the <img> tag
 * ============================================================
 */

import { useState } from 'react';
import { limitedEdition } from '../data/products';

const LimitedEditionCard = () => {
    // Safe image error handling via React state
    const [imgError, setImgError] = useState(false);

    return (
        <div className="bg-white rounded-2xl p-4 min-h-[200px] flex flex-col">
            {/* Product Image */}
            <div className="flex justify-center mb-2">
                {imgError ? (
                    <div className="h-20 flex items-center justify-center text-navy/50 text-sm">
                        {limitedEdition.name}
                    </div>
                ) : (
                    <img
                        src={limitedEdition.image}
                        alt={limitedEdition.name}
                        className="h-20 object-contain"
                        onError={() => setImgError(true)}
                    />
                )}
            </div>

            {/* Title */}
            <h3 className="text-navy font-bold text-lg">{limitedEdition.name}</h3>

            {/* Description */}
            <p className="text-navy/70 text-xs mt-1 mb-3 line-clamp-2">
                {limitedEdition.description}
            </p>

            {/* CTA Button */}
            <button className="mt-auto bg-navy text-white text-sm px-4 py-2 rounded-lg hover:bg-navy/90 transition-colors self-start">
                {limitedEdition.ctaText}
            </button>
        </div>
    );
};

export default LimitedEditionCard;
