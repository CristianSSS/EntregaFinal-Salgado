import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import Button from  "../Button/Button"
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

export default function ItemDetail({data}){

    const {name, description, pictureUrl, stock} = data;

    const [quantity, setQuantity]= useState(0);

    const {addItem,  getCart} = useContext(CartContext);

    const handlerAddToCart=(cantidad)=>{

        setQuantity(cantidad);
            
        addItem(data , cantidad);
       
    }
    
    return(
        <>

            <dir className="layout-item-detail">

                <img className="detail-product-img" src={pictureUrl} alt={name}/>

                <div className="detail-info">

                    <h1>{name}</h1>

                    <p>{description}</p>

                </div>

                {
                    quantity > 0 ? (
                        <Link to={"/cart"} >Ir al carrito</Link>
                    ) : (

                        <ItemCount className="detail-button-stock" initial={1} stock={stock} action={handlerAddToCart}/>
                    )
                }
                


            </dir>

            

        </>
    )
}