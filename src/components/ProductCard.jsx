/**
 * ProductCard Component - Reusable product display card
 * 
 * Usage:
 * <ProductCard product={productData} />
 * 
 * Props:
 * - product: { id, name, brand, image, discount, category }
 */

const ProductCard = ({ product }) => {
    return (
        <div className="group bg-mint/95 rounded-xl p-5 relative overflow-hidden cursor-pointer min-h-[200px] border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-lime/50 hover:shadow-lg hover:shadow-lime/10">
            {/* Brand Tag */}
            <span className="absolute top-4 left-4 bg-navy text-white text-[10px] px-2.5 py-1 rounded-full font-inter uppercase tracking-wider font-medium">
                {product.brand}
            </span>

            {/* Product Image */}
            <div className="flex items-center justify-center h-32 mt-8">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="text-navy/50 text-sm text-center">Image: ${product.name}</div>`;
                    }}
                />
            </div>

            {/* Discount Text */}
            <p className="text-white font-bold text-base mt-4 font-opensans">
                {product.discount}
            </p>
        </div>
    );
};

export default ProductCard;
