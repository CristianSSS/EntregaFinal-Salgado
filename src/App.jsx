import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/detail";
import Products from "./pages/products";
import Home from "./pages/home";
import Categoria from "./pages/categories"
export default function App() {
  
  

  return (

    <div style={{ maxWidth: "1400px", margin:"0 auto"}}>

      

      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category/:category" element={<Categoria />} />
          <Route path="*" element={<h1>not found</h1>}/>
        </Routes>
      </BrowserRouter>


    </div>

  );
}
