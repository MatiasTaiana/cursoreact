import { CartWidget } from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h2>Prospero Velazco</h2>
            <div><a href="">Nosotros</a></div>
            <div><a href="">Menu</a></div>
            <div><a href="">Locales</a></div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
