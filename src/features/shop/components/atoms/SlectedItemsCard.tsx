import React from 'react';
import type { SelectedProductsProps } from '../types/type';

const SelectedProducts: React.FC<SelectedProductsProps> = ({
    title,
    subtitle,
    imageSrc,
    category,
    isTall = false
}) => {
    return (
        <div className={`bg-gray-100 overflow-hidden shadow-sm w-[284px] ${isTall ? 'h-full flex flex-col rounded-br-[85px] w-[568px]' : 'hidden lg:block'}`}>
            <div className="pt-4 px-2">
                <h2 className="font-bold text-black leading-tight">
                    {title}
                </h2>
                <h3 className="font-bold text-black leading-tight">
                    {subtitle}
                </h3>
            </div>
            <div className={`relative ${isTall ? 'flex-1 min-h-0' : 'h-64 md:h-72'} flex items-end justify-center overflow-hidden`}>
                <img
                    src={imageSrc}
                    alt="Fashion model"
                    className="h-full w-full object-contain object-top"
                />
                <div className={`absolute bottom-0 left-0 right-0 ${isTall ? 'h-32' : 'h-20'} bg-gradient-to-t from-gray-100 to-transparent`}></div>
            </div>
            <div className={`px-6 py-4 bg-gray-100 relative ${isTall ? 'z-10' : ''}`}>
                <p className="text-black font-medium text-sm">
                    {category}
                </p>
            </div>
        </div>
    );
};

export default SelectedProducts;