import videoFondo from '../videos/Azul - 10536.mp4'
import NavBar2 from "../Components/NavBar2";
import CardsInicio from "../Components/CardsInicio";
import videoIntro from '../videos/final chico.mp4'
import { useEffect, useState } from 'react';
  

function Home(){

    const [animacion, setAnimacion] = useState (true)

    useEffect(() => {
        setTimeout(() => {
            setAnimacion(false)
        }, 1000);
    }, [])

    return(
        <div className="main" >
            <div className="overlay"></div>
            <video src={animacion ? videoIntro : videoFondo} autoPlay loop muted  ></video>
            <div className="contentHome" >
                {animacion? <></> : <NavBar2></NavBar2>}
                {animacion ? <></> : <CardsInicio></CardsInicio>}
            </div>

        </div>
    )
}

export default Home;