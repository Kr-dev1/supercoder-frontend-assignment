import NavLogo from "../atoms/NavLogo"
import NavLink from "../atoms/NavLink"
import NavOptions from "../atoms/NavOptions"

export default function NavbarMenu() {
    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden lg:flex h-20 items-center justify-around gap-12 px-28 bg-black shadow-black shadow-2xl">
                <div>
                    <NavLogo />
                </div>
                <NavLink href="#">SS</NavLink>
                <NavLink href="#">FW</NavLink>
                <NavLink href="#">PANTS</NavLink>
                <NavLink href="#">T-Shirt</NavLink>
                <NavLink href="#">SALE</NavLink>
                <NavLink href="#">COLLECTION</NavLink>
                <NavLink href="#">COMMUNITY</NavLink>
                <div>
                    <NavOptions />
                </div>
            </nav>

            {/* Mobile Navbar */}
            <MobileNav />
        </>
    )
}

const MobileNav = () => {
    return (
        <nav className="lg:hidden grid grid-cols-3 items-center bg-black py-6">
            <span></span>
            <div className="flex justify-center">
                <NavLogo />
            </div>
            <div className="flex justify-end pr-6">
                <NavOptions />
            </div>
        </nav>
    )
}
