import CardsCapsulas from '../Components/CardsCapsulas'
import CardsCapsulas1 from '../Components/CardsCapsulas1'
import Navbar from '../Components/Navbar'
import videoFondo from '../videos/Azul - 10536.mp4'
import NavBar2 from "../Components/NavBar2";
import CardsCapsulas2 from '../Components/CardsCapsulas2'


export default function ItemDetails(){
    return(
        <div className="main" >
            <div className="overlay"></div>
            <video src={videoFondo} autoPlay loop muted ></video> 
            <div className="contentCap" >
                <NavBar2></NavBar2>
                <CardsCapsulas2></CardsCapsulas2>
            </div>
        </div>
    )
}