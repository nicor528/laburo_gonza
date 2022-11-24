import logo from '../img/krazylogo.JPG';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function NavBar2 () {
    const navegar = useNavigate();

    const goCapsulas = () => {
        navegar(`/capsulas`)
    }

    const goVapos = () => {
        navegar(`/vapos`)
    }

    const goCarrito = () => {
        navegar(`/carrito`)
    }

    const goHome = () => {
        navegar(`/`)
      }


    return (
        <div className="NavBar2">
            <img src={logo} width="32" height="32" className="logoNavbar"/>
            <input type="button" value="Inicio" className="botonNavbar" 
                    onClick={goHome}></input>
            <input type="button" value="Comprar Capsulas" className="botonNavbar" 
                    onClick={goCapsulas}></input>
            <input type="button" value="Comprar Vapos" className="botonNavbar" 
                    onClick={goHome}></input>
            <input type="button" value="Nuestros Combos" className="botonNavbar" 
                    onClick={goHome}></input>
        </div>
    )
}