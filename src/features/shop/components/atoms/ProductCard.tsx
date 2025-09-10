import type { ProductCardProps } from '../types/type';

const ProductCard = ({ details }: ProductCardProps) => {
    const colors = [
        { name: 'Yellow', color: 'bg-yellow-400' },
        { name: 'Olive', color: 'bg-green-700' },
        { name: 'Navy', color: 'bg-gray-800' },
        { name: 'White', color: 'bg-white border-2 border-gray-200' },
        { name: 'Orange', color: 'bg-orange-400' },
        { name: 'Gold', color: 'bg-yellow-500' },
        { name: 'Amber', color: 'bg-amber-400' },
        { name: 'Yellow-500', color: 'bg-yellow-500' },
        { name: 'Orange-500', color: 'bg-orange-500' },
        { name: 'Yellow-600', color: 'bg-yellow-600' }
    ];

    return (
        <div className="bg-white mx-4 mb-28">
            {/* Product Image */}
            <div className="flex items-center justify-center h-80 md:h-96 md:mb-6">
                <img
                    src={details.imgSrc}
                    alt={details.title}
                    className="max-h-full max-w-full object-contain"
                />
            </div>

            <div className="flex gap-1 md:gap-2 md:mb-4 justify-center">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className={`w-2.5 h-2.5 md:w-4 md:h-4 rounded-full ${color.color} hover:scale-110 transition-transform`}
                    />
                ))}
            </div>
            <div className="text-left space-y-2">
                <p className="text-sm text-gray-600 leading-tight">
                    {details.title}
                </p>
                <p className="text-sm text-gray-500">
                    {details.sub}
                </p>

                <div className="flex gap-8 items-center mt-4">
                    <span className="text-sm text-gray-600 bg-[#fffcf3] rounded-md px-2 py-1 border border-[#FFEFBB]">
                        {details.category}
                    </span>
                    <span className="text-lg font-medium text-black">
                        {details.price}
                    </span>
                </div>
            </div>
        </div>
    );
};


export default ProductCard