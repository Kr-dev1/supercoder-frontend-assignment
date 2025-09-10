import NavbarMenu from '../molecules/NavbarMenu'
import HeroText from '../atoms/HeroText'
import CarouselIndicator from '../atoms/CarouselIndicator'
import SelectedItems from '../molecules/SelectedItems'
import ProductDisplay from '../molecules/ProductDisplay'
import Banner from '../atoms/Banner'
import Chat from '../atoms/Chat'
import Footer from '../atoms/Footer'

const Home = () => {
    return (
        <>
            <div className='relative pb-32'>
                <Chat />
                <div className="grid grid-cols-5 grid-rows-10 md:grid-rows-12 gap-2 h-screen bg-cover bg-center bg-no-repeat bg-[url('/hero.png')]">
                    <div className="col-span-5 md:col-span-5">
                        <NavbarMenu />
                    </div>

                    <div className="flex items-center col-start-3 row-start-9 col-span-3 md:col-span-2 md:row-span-2 md:col-start-4 md:row-start-8">
                        <HeroText />
                    </div>
                    <div className="flex items-end col-span-3 mb-4 col-start-2 row-start-10 md:col-start-3 md:row-start-12 md:col-span-1 md:mt-8 md:pl-14">
                        <CarouselIndicator />
                    </div>
                </div>
                <div className='mt-32'>
                    <p className='ml-12 mb-6 lg:ml-44 text-left font-bold'>Lightweight and excellent thermal insulation
                    </p>
                    <SelectedItems />
                </div>

                <ProductDisplay title={"Product Display Title"} sub={"ProductDisplay SubTitle"} />
                <ProductDisplay title={"Product Display Title"} sub={"ProductDisplay SubTitle"} />
                <Banner />
            </div>
            <Footer />
        </>
    )
}

export default Home


