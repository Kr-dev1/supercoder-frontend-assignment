import CarouselIndicator from "../atoms/CarouselIndicator"
import SelectedProducts from "../atoms/SlectedItemsCard"

const selectedProducts = [
    {
        title: "Header", subtitle: "subtitle", src: "carousel1.png", category: "category"
    },
    {
        title: "Header", subtitle: "subtitle", src: "carousel1.png", category: "category"
    },
    {
        title: "Header", subtitle: "subtitle", src: "carousel1.png", category: "category"
    },
    {
        title: "Header", subtitle: "subtitle", src: "carousel1.png", category: "category"
    },
]

const SelectedItems = () => {
    return (
        <>
            <div className="flex items-center justify-center gap-x-8 h-[520px]">
                {selectedProducts.map((item, index) => (
                    <SelectedProducts
                        key={index}
                        title={item.title}
                        imageSrc={item.src}
                        category={item.category}
                        subtitle={item.subtitle}
                        isTall={index === 3}
                    />
                ))}
            </div>

            <div className="grid grid-cols-5 grid-rows-1 gap-0">
                <div className="col-start-3 m-12">
                    <CarouselIndicator />
                </div>
            </div>

        </>
    )
}

export default SelectedItems