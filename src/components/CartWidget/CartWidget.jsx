import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import "./cartwidget.css";
import { Link } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";

export default function CartWidget(){

    const [cartCount, setCartCount] = useState(0);

    const {getCart} = useContext(CartContext);

    useEffect(()=>{

        setCartCount(getCart().length);

    }, [getCart])

    return(
        <Link to={"/cart"} className="carticon-container">
            <FontAwesomeIcon icon={faCartShopping} className="carticon-icon" />
            <span className="carticon-count" style={cartCount > 0 ? {} : {display:"none"}}>
                {cartCount > 0 ? cartCount : ""}
            </span>
        </Link>
    )
}