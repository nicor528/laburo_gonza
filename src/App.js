import React, { useEffect } from "react";
import Home from './pages/Home'
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buy from './pages/Buy'
import Buy2 from './pages/Buy2'
import Combos from "./pages/Combos";
import Cart from "./pages/Cart";


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/capsulas' element={<Buy/>} />
          <Route path='/capsulas2' element={<Buy2/>} />
          <Route path='/combos' element={<Combos/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;