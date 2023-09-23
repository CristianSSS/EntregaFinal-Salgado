import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import Menu from "../Menu/Menu";

export default function NavBar(){
    return(
        <nav className="navbar">

            <h1 style={{margin:0, padding:"20px", textDecoration:"underline"}}>ShopTastic</h1>

            <Menu/>

            <CartWidget/>
        </nav>
    );
}