import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a href="#" className="navbar-brand">Perfumería</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Hombre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Mujer</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Niños</a>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
};
export default NavBar;