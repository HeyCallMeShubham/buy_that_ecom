 
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
    return (

        <nav className='navbar-main-container'>

            <ul>

                <li className="firstletterofTocapitalize navlist onhovercursorpointer borderwhenhovered"><span className="onhovercursorpointer icon icontosize hamburgermenuicon" ><RxHamburgerMenu /> </span> all</li>
                <li className="firstletterofTocapitalize navlist onhovercursorpointer borderwhenhovered">hello</li>
          
            </ul>

        </nav>

    )
}

export default Navbar