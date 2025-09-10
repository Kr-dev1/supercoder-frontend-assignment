import ProductCard from "../atoms/ProductCard"
import type { ProductDisplayProps } from "../types/type"

const products = [
    { imgSrc: "product.png", title: "Product Name", sub: "BrandName", category: "Number", price: "000,000원" },
    { imgSrc: "product.png", title: "Product Name", sub: "BrandName", category: "Number", price: "000,000원" },
    { imgSrc: "product.png", title: "Product Name", sub: "BrandName", category: "Number", price: "000,000원" },
    { imgSrc: "product.png", title: "Product Name", sub: "BrandName", category: "Number", price: "000,000원" },
]

const ProductDisplay = ({ title, sub }: ProductDisplayProps) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-center mb-12">
                <p className="font-bold">{title}</p>
                <p className="font-semibold">{sub}</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 gap-x-4 md:grid-rows-1">
                {products.map(product => (
                    <ProductCard details={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductDisplay