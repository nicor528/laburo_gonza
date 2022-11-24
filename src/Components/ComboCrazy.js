import vaposycap from '../img/vaposYcapsulas_mediana.jpeg'
import { useState } from 'react'

export default function ComboCrazy () {

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

    return(
        <div className="cardNico3" >
        <h2 className='cardTituloN' >Combo 1</h2>

        <img className="imagenCap" src={vaposycap} ></img>

{/*        <div className="itemcount" >
            <div className='conteinerBotones' >
                <input type="button" value="+" onClick={sumar_contador} className="boton_sumar" ></input>
                <span className="contador"> </span>
                <span className="contador">USD </span>
                <input type="button" value="-" onClick={restar_contador} className="boton_restar"></input>
                
            </div>
            <div className='agregarConteiner'>
                <input type="button" value='Agregar al carrito' className="boton_agregar_carrito" 
                ></input>
            </div>
        </div>*/}
        <div className="infoCardsConteiner" >
        <h4 className='infoCards'>Incluye un vapo y ¡3! capsulas de genetica a elección.</h4>
            <h5 className='infoCards'>Valor por combo  USD</h5>
            <h5 className="infoCards" >Eligí la genetica de las capsulas! (No pueden sumar mas de 3 en total)</h5>
            <div className='conteinerSelectGenetica'>
                <h5 className="infoCards" >Indica</h5>
                <select className="infoCards" name="lenguajes" id="lang">
                    <option value={1} >1 capsula</option>
                    <option value={2}>2 capsulas</option>
                    <option value={3}>3 capsulas</option>
                </select>
                <h5 className="infoCards" > Genetica: </h5>
                <select className="infoCards" name="lenguajes" id="lang">
                    <option value={1} >Girl Scout Cookies</option>
                </select>
            </div>
            <div className='conteinerSelectGenetica'>
                <h5 className="infoCards" >Sativa</h5>
                <select className="infoCards" name="lenguajes" id="lang">
                    <option value={1} >1 capsula</option>
                    <option value={2}>2 capsulas</option>
                    <option value={3}>3 capsulas</option>
                </select>
                <h5 className="infoCards" > Genetica: </h5>
                <select className="infoCards" name="lenguajes" id="lang">
                    <option value={1} >Super Lemon Haze</option>
                    <option value={1} >Gorila Banana</option>
                </select>
            </div>
            <div className='conteinerSelectGenetica'>
                <h5 className="infoCards" >Hibrida</h5>
                <select className="infoCards" name="cantidad" id="lang">
                    <option value={1} >1 capsula</option>
                    <option value={2}>2 capsulas</option>
                    <option value={3}>3 capsulas</option>
                </select>
                <h5 className="infoCards" > Genetica: </h5>
                <select className="infoCards" name="lenguajes" id="lang">
                    <option value={1} >Super Soul Diesel</option>
                    <option value={1} >Orange Cookies</option>
                </select>
            </div>
            <div className='agregarConteiner2'>
                <input type="button" value='Agregar al carrito' className="boton_agregar_carrito" 
                ></input>
            </div>
            
            
        </div>

    </div>
    )
}