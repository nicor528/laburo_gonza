import img from '../img/pen.JPG'
import logo from '../img/krazylogo.JPG'
import capsulas from '../img/capsulas_todas_chica.jpeg'
import vaposycap from '../img/vaposYcapsulas_mediana.jpeg'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function CardsInicio () {

    const navegar = useNavigate()

    const goCapsulas = () => {
        navegar(`/capsulas2`)
    }

    const goCombos = () => {
        navegar('/combos')
    }

    return (
        <div className="CardsInicio" >
            <div className="cardNico"  >
                <img src={capsulas}></img>
                <input type="button" value="Capsulas y Pen´s" className="irCapsulas" 
                    onClick={goCapsulas}></input>
            </div>
{/*            <div className="cardNico"  >
                <img src={img} ></img>
                <input type="button" value="Nuestros Vapos" className="irCapsulas" 
                    onClick={goCapsulas}></input>
            </div>*/}
            <div className="cardNico"  >
                <img src={vaposycap} ></img>
                <input type="button" value="Combos" className="irCapsulas" 
                    onClick={goCombos}></input>
            </div>
        </div>
    )
}