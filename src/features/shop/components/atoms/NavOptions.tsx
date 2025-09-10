import cart from "/cart.png"
import profile from "/profile.png"
import search from "/search.png"
import hamburger from "/hamburger.png"

const NavOptions = () => {
    return (
        <div className="flex gap-5">
            <img src={cart} />
            <img src={profile} />
            <img className="show-only-largescreens" src={search} />
            <img className="lg:hidden" src={hamburger} />
            <p className="text-white hidden md:block">Logout</p>
        </div>
    )
}

export default NavOptions