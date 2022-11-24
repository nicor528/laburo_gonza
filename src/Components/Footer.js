import logo from '../img/krazylogo.JPG'
import fondo from '../img/vaposYcapsulas.jpeg'


export default function Footer () {
    
    return (
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      <img src={logo} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
      </a>
      <span class="mb-3 mb-md-0 text-muted">&copy; 2022 Krazy Vaps, Powered by Riqui developers</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><svg className="bi" width="24" height="24"><use xlinkHref={logo}/></svg></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlinkHref={logo}/></svg></a></li>
      <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"/></svg></a></li>
    </ul>
  </footer>
    )
}