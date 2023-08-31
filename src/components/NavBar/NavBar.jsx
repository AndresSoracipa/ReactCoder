import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Perfumería</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to ="/category/hombre">Hombre</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to ="/category/mujer">Mujer</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to ="/category/niños">Niños</NavLink>
                        </li>
                    </ul>
                </div>
                
            </div>
            <CartWidget/>
        </nav>
        </div>
    );
};
export default NavBar;