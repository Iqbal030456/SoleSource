/**
 * ============================================================
 * ProductCard Component
 * ============================================================
 *
 * PURPOSE:
 *   Displays a single product as a card with its brand tag,
 *   image, and discount text. Used on the Home and Search pages.
 *
 * PROPS (data this component needs):
 *   product  {Object}  - A product object from `src/data/products.js`
 *     ├── id        {number}  - Unique identifier
 *     ├── name      {string}  - Product name (used as image alt text)
 *     ├── brand     {string}  - Brand label shown in the top-left tag
 *     ├── image     {string}  - Path to the product image
 *     └── discount  {string}  - Discount text (e.g. "UP to 20% OFF")
 *
 * HOW TO EDIT:
 *   - To change the card colors, look for the Tailwind classes below
 *     (e.g. `bg-mint/95` for the background, `bg-navy` for the tag)
 *   - To change product data, edit `src/data/products.js` instead
 *   - To change the hover animation, adjust the `hover:` classes
 *
 * USAGE:
 *   import ProductCard from './components/ProductCard';
 *   <ProductCard product={myProductObject} />
 * ============================================================
 */

import { useState } from 'react';

const ProductCard = ({ product }) => {
    // Destructure the product object for cleaner code below.
    // This means instead of writing `product.name` everywhere,
    // we can just write `name`.
    const { name, brand, image, discount } = product;

    // Track whether the image failed to load.
    // If it fails, we show a text fallback instead of a broken icon.
    // ⚠️ SAFETY NOTE: We use React state here instead of innerHTML
    //    to prevent Cross-Site Scripting (XSS) vulnerabilities.
    const [imgError, setImgError] = useState(false);

    return (
        <div className="group bg-mint/95 rounded-xl p-5 relative overflow-hidden cursor-pointer min-h-[200px] border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-lime/50 hover:shadow-lg hover:shadow-lime/10">
            {/* Brand Tag — small pill in the top-left corner */}
            <span className="absolute top-4 left-4 bg-navy text-white text-[10px] px-2.5 py-1 rounded-full font-inter uppercase tracking-wider font-medium">
                {brand}
            </span>

            {/* Product Image (with safe fallback) */}
            <div className="flex items-center justify-center h-32 mt-8">
                {imgError ? (
                    // Fallback: shown when the image path is broken
                    <div className="text-navy/50 text-sm text-center">
                        Image: {name}
                    </div>
                ) : (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                        // When the image fails to load, flip the state
                        // so the fallback text renders instead
                        onError={() => setImgError(true)}
                    />
                )}
            </div>

            {/* Discount Text */}
            <p className="text-white font-bold text-base mt-4 font-opensans">
                {discount}
            </p>
        </div>
    );
};

export default ProductCard;
