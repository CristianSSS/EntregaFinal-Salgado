import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import Button from  "../Button/Button"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemDetail({data}){

    const {name, description, pictureUrl, stock} = data;

    const [quantity, setQuantity]= useState(0);

    const handlerAddToCart=(cantidad)=>{
        setQuantity(cantidad);
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

                        <ItemCount className="detail-button-stock" initial={0} stock={stock} action={handlerAddToCart}/>
                    )
                }
                


            </dir>

            

        </>
    )
}