import CombosConteiner from "../Components/CombosConteiner";
import NavBar2 from "../Components/NavBar2";
import videoFondo from '../videos/Azul - 10536.mp4'

export default function Combos () {


    return (
        <div className="main" >
            <div className="overlay"></div>
            <video src={videoFondo} autoPlay loop muted ></video> 
            <div className="contentCap" >
                <NavBar2/>
                <CombosConteiner/>
            </div>
        </div>
    )
}