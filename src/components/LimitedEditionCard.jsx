import { limitedEdition } from '../data/products';

const LimitedEditionCard = () => {
    return (
        <div className="bg-white rounded-2xl p-4 min-h-[200px] flex flex-col">
            {/* Product Image */}
            <div className="flex justify-center mb-2">
                <img
                    src={limitedEdition.image}
                    alt={limitedEdition.name}
                    className="h-20 object-contain"
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />
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
