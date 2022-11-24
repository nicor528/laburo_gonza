import Carousel from 'react-bootstrap/Carousel';
import img from '../../../img/pen.JPG'
import capsulas from '../../../img/capsulas_todas_chica.jpeg'
import logo from '../../../img/krazylogo.JPG'


export default function Calesita() {


  return (
    <Carousel fade>
      <Carousel.Item  style={{backgroundImage: `url(${capsulas})`}}>

      
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${logo})`}} >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
   
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src={logo} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-3">
                
       
              </li>
              <li className="d-flex align-items-center">
              
                <small>3d</small>
              </li>
            </ul>
          </div>
        </div>
      
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="Second slide"
          width='200px'
          height='500px'
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="Third slide"
          width='200px'
          height='500px'
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

