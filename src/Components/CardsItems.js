import img from '../img/pen_chico.jpg'
import logo from '../img/krazylogo.JPG'
import capsulas from '../img/capsulas_todas_chica.jpeg'
import vaposycap from '../img/vaposYcapsulas_mediana.jpeg'
import Button from 'react-bootstrap/Button';
import ModalComprar from './Modal_comprar';
import { useNavigate } from 'react-router-dom';

export default function CardsItems () {

    const navegar = useNavigate()

    const goCapsulas = () => {
        navegar(`/capsulas`)
    }

    return (
        <div className="container px-4 py-5" id="custom-cards">
    

    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
        <div className="card card-cover overflow-hidden text-white bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${capsulas})`, height:'200%'}} >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <Button onClick={goCapsulas} variant="dark">Comprar Capsulas</Button>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src={logo} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-3">
                
                <Button onClick={goCapsulas} variant="dark">Comprar Capsulas</Button>
              </li>
              <li className="d-flex align-items-center">
              
  
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover overflow-hidden text-white bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${img})`, height:'200%' }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <Button variant="dark">Comprar Vapos</Button>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src={logo} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-3">
            
              <Button variant="dark">Comprar Vapos</Button>
              </li>
              <li className="d-flex align-items-center">
          

              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover overflow-hidden text-white bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${vaposycap})`, height:'200%'}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <Button variant="dark">Nuestros Combos</Button>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src={logo}  alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-3">
            
              <Button variant="dark">Nuestros Combos</Button>
              </li>
              <li className="d-flex align-items-center">
          
       
              </li>
            </ul>
          </div>
        </div>
      </div>

     {/* <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${vaposycap})` }} >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"></h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-3">
      
                <small>California</small>
              </li>
              <li className="d-flex align-items-center">
              
                <small>5d</small>
              </li>
            </ul>
          </div>
        </div>
    </div>*/}
    </div>
  </div>
    )
}