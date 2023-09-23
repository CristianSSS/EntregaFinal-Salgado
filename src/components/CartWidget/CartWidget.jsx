import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import "./cartwidget.css";

import { useState } from "react";

export default function CartWidget(){
    const [cartCount, setCartCount] = useState(1);
    return(
        <button type="button" className="carticon-container">
            <FontAwesomeIcon icon={faCartShopping} className="carticon-icon" />
            <span className="carticon-count" style={cartCount > 0 ? {} : {display:"none"}}>
                {cartCount > 0 ? cartCount : ""}
            </span>
        </button>
    )
}