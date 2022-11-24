import { useState , useEffect} from "react";
import caps from '../img/capsulas_todas_inter.jpeg'

export default function CardNico ({nombre, stock, valor, imagen, genetica}) {

    const [agregado, setAgregado] = useState(false);

    const [contador, setContador] = useState(1);

    const [precio, setPrecio] = useState(0)


    useEffect(() => {
        async function setCart () {
            const precio2 = await contador * valor
            await setPrecio(precio2)
        }
        setCart()
    }, [contador])

    function nohayStock(){
        alert("No hay stock")
    }

    async function sumar_contador(){
        if (contador < stock) {
            await setContador(contador + 1)
            
        }
    }

    async function restar_contador(){
        if(contador > 1){
            await setContador(contador - 1)
    }}

    function agregar_a_carrito(){
        if(stock < contador){
            alert("No hay Stock del producto")
        }else{
            
            setAgregado(true);
        }   }

    return(
        <div className="cardNico2" >
        <h2 className='cardTituloN' >{nombre}</h2>

        <img className="imagenCap" src={caps} ></img>

        <div className="itemcount" >
            <div className='conteinerBotones' >
                <input type="button" value="+" className="boton_sumar" onClick={sumar_contador} ></input>
                <span className="contador">{stock ? contador : 0} </span>
                <span className="contador">{precio} USD </span>
                <input type="button" value="-" className="boton_restar" onClick={restar_contador}></input>
                
            </div>
            <div className='agregarConteiner'>
                <input type="button" value={stock ? "Agregar al carrito" : "No hay Stock"} className="boton_agregar_carrito" 
                onClick={stock ? agregar_a_carrito : nohayStock}></input>
            </div>
        </div>
        <div className="infoCardsConteiner" >
            <h4 className='infoCards'>Valor por unidad {valor} USD</h4>
            {genetica ? <h4 className="infoCards" >Genetica: {genetica}</h4> : <></>}
        </div>
        
    </div>
    )
}