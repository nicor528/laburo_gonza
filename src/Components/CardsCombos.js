import { useState } from 'react'
import vaposycap from '../img/vaposYcapsulas_mediana.jpeg'

export default function CardsCombos ( {id}) {
    const stock = 5
    const [contador, setContador] = useState(0)

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
         
        }}

    if(id == "Kit completo"){
        return (
            <div className="cardNico3" >
            <h2 className='cardTituloN' >Combo 1</h2>
    
            <img className="imagenCap" src={vaposycap} ></img>
    
            <div className="itemcount" >
                <div className='conteinerBotones' >
                    <input type="button" value="+" onClick={sumar_contador} className="boton_sumar" ></input>
                    <span className="contador"> {contador} </span>
                    <span className="contador">USD </span>
                    <input type="button" value="-" onClick={restar_contador} className="boton_restar"></input>
                    
                </div>
                <div className='agregarConteiner'>
                    <input type="button" value='Agregar al carrito' className="boton_agregar_carrito" 
                    ></input>
                </div>
            </div>
            <div className="infoCardsConteiner" >
                <h4 className='infoCards'>Incluye un vapo y una capsula de genetica a elección.</h4>
                <h4 className='infoCards'>Costo X USD</h4>
                <select name="lenguajes" id="lang">
                    <option value="javascript">Indica</option>
                    <option value="php">Sativa</option>
                    <option value="java">Hibrida</option>
                </select>
            </div>
    
            </div>
        )
    }
    if(id == "Kit Crazy"){
        return(
            <></>
        )
    }
}