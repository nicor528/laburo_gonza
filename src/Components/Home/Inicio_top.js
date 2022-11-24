import img from '../../img/pen.JPG'
import logo from '../../img/krazylogoChico.jpg'
import fondo2 from '../../img/vaposYcapsulas.jpeg'

export default function Inicio_top ( ) {

    return(
    <div style={{marginLeft:'-1rem', marginBottom:'-2rem'}} >
        <div className="px-10 pt-3 my-5 text-center " /*style={{backgroundImage: `url(${logo})`}}*/ >
    <h1 className="display-4 fw-bold" style={{color:'Violet'}}>Un pequeño parrafo sobre Krazy vaps.</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4" style={{color:'white'}} >Chamuyo.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
      </div>
    </div>
    <div className="overflow-hidden" >
      <div className="container px-5">
        <img src={img} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="200" height="150" loading="lazy"/>
      </div>
    </div>
  </div>
  </div>
      
    )
}