import '../../css/Navbar.css';
import CartWidget from '../NavBar/CartWidget';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const NavBar = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const cartRef = useRef(null);
    const handleCartClick = () => {
        setCartOpen(prev => !prev);   
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setCartOpen(false);
            }
        };
        if (cartOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [cartOpen]);

    return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container d-flex justify-content-between">

            <div className="logo">

                <Link to="/" className="navbar-brand d-flex align-items-center">
                 <span className="logo-svg" aria-label="marca"></span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
                    aria-controls="menu" aria-expanded="false" aria-label="Mostrar - Ocultar menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a href="#" className="nav-link color-nav">Nosotros</a>
                    </li>

                    <li className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle color-nav" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false" id="dropdown-menu">
                            Productos
                        </a>

                        <ul className="dropdown-menu mt-2" aria-labelledby="dropdown-menu" >
                            <li><Link to="/categoria/clasicos" className="dropdown-item color-nav"> Relojes Clasicos</Link></li>
                            <li><Link to="/categoria/deportivos" className="dropdown-item color-nav"> Relojes Deportivos</Link></li>
                            <li><Link to="/categoria/inteligentes" className="dropdown-item color-nav"> Relojes Inteligentes</Link></li>

                        </ul>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link color-nav">Novedades</a>
                    </li>

                </ul>
            </div>
            <div className="d-flex align-items-center gap-2 position-relative" ref={cartRef}>
                <CartWidget onClick={handleCartClick} isOpen={cartOpen} onCloseCart={() => setCartOpen(false)}/>
            </div>
        </div>

    </nav>
    );
}

export default NavBar;
