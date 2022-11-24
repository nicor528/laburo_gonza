import capsulas from '../img/capsulas_todas_chica.jpeg'
import vaposycap from '../img/vaposYcapsulas_mediana.jpeg'
import { useState , useEffect} from "react";
import Button from 'react-bootstrap/Button';
import { getDB, obtenerProductos } from '../Apis/Firebase';

export default function CardsCapsulas1 () {

    const [products, setProducts] = useState([]);

    const [agregado, setAgregado] = useState(false);

    const [contador, setContador] = useState(1)
    let stock = 5;

    useEffect(() => {
        async function data () {
            
            const datas = await obtenerProductos()
            //await obtenerProductos.then((res) => setProducts(res))
            await setProducts(datas)
            console.log(products)
        }
        data()
    },[])

    function sumar_contador(){
        if (contador < stock) {
            setContador(contador + 1)
        }
        
    }

    function restar_contador(){
        if(contador>1){
        setContador(contador - 1)
    }}

    function agregar_a_carrito(){
        if(stock < contador){
            alert("No hay Stock del producto")
        }else{
            
            setAgregado(true);
        }   }

    

    return(
        <div className="cardsConteiner" style={{backgroundImage: `url(${vaposycap})`, backgroundColor:'black' }}  >
          
            <div className="cardNico2" >
                <h2 className='cardTituloN'>Indica</h2>
                <img src={capsulas} ></img>
                <h4 className='cardTituloN'>Valor por unidad 40 USD</h4>
                <div className="itemcount" >
                
                    <input type="button" value="+" className="boton_sumar" onClick={sumar_contador} ></input>
                    <span className="contador">{contador} </span>
                    <span className="contador">{contador} USD </span>
                    <input type="button" value="-" className="boton_restar" onClick={restar_contador}></input>
                    
                </div>
                <input type="button" value="Agregar al carrito" className="boton_agregar_carrito" 
                    onClick={agregar_a_carrito}></input>
            </div>
            <div className="cardNico2" >
                <h2 className='cardTituloN' >Hibrida</h2>
                <img src={capsulas} ></img>
                <div className="itemcount" >
                    <div className='conteinerBotones' >
                        <input type="button" value="+" className="boton_sumar" onClick={sumar_contador} ></input>
                        <span className="contador">{contador} </span>
                        <span className="contador">{contador} USD </span>
                        <input type="button" value="-" className="boton_restar" onClick={restar_contador}></input>
                    </div>
                    <div className='agregarConteiner'>
                        <input type="button" value="Agregar al carrito" className="boton_agregar_carrito" 
                        onClick={agregar_a_carrito}></input>
                    </div>
                </div>
                <h4 className='cardTituloN'>Valor por unidad 40 USD</h4>
                
                
            </div>
            <div className="cardNico2" >
                <h2 className='cardTituloN' >Sativa</h2>
                <img src={capsulas} ></img>
                <h4 className='cardTituloN'>Valor por unidad 40USD</h4>
                <div className="itemcount" >
                
                    <input type="button" value="+" className="boton_sumar" onClick={sumar_contador} ></input>
                    <span className="contador">{contador} </span>
                    <span className="contador">{contador} USD </span>
                    <input type="button" value="-" className="boton_restar" onClick={restar_contador}></input>
                    
                </div>
                <input type="button" value="Agregar al carrito" className="boton_agregar_carrito" 
                    onClick={agregar_a_carrito}></input>
        </div>
        </div>
    )
}