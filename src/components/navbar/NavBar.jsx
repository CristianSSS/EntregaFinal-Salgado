import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="navbar">

            <Link to="/" style={{height:"auto"}} className="remove-underline">
                <h1 style={{margin:0, padding:"20px", textDecoration:"underline"}}>ShopTastic</h1>
            </Link>


            <Menu/>

            <CartWidget/>
        </nav>
    );
}