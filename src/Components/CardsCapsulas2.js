import vaposycap from '../img/vaposYcapsulas_mediana.jpeg'
import CardNico from './CardNico';
import capsulas from '../img/capsulas_todas_chica.jpeg'
import { useState , useEffect} from "react";
import Button from 'react-bootstrap/Button';
import { getDB, obtenerProductos } from '../Apis/Firebase';


export default function CardsCapsulas2 () {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function data () {
            const datas = await obtenerProductos()
            await setProducts(datas)
            console.log(products)
        }
        data()
    },[])

    return(
        <div className="cardsConteiner" style={{backgroundImage: `url(${vaposycap})`, backgroundColor:'black' }}  >
            {products.map(item => {
                if(item.product){
                    return (
                        <CardNico
                            id = {item.id}
                            nombre = {item.nombre}
                            imagen = {item.imagen}
                            valor = {item.costo}
                            stock = {item.stock}
                            genetica = {item.genetica}
                        />
                    )
                }

            })}
        </div>
    )
}