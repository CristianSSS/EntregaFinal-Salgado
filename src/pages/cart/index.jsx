import { useEffect, useContext, useState} from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom";


export default function Cart(){

    const {getCart, removeItem} = useContext(CartContext);
    const [productos, setProductos]=useState([]);

    useEffect(()=>{

        setProductos(getCart());

        console.log(productos);

    });

    const handlerRemoveItem=(id)=>{
        removeItem(id)
    }

    return(
        <>
            <h1>Tus articulos</h1>

            <div style={{display:"flex", flexDirection:"column", gap:"50px"}}>   
                {
                   productos.map(prod => {

                    return (
                        <article style={{position:"relative", display:"flex", gap:"40px", justifyContent:"space-between", padding:"40px"}}>
                            
                            <img src={prod.pictureUrl} alt="" style={{width:"50px", height:"50px", objectFit:"cover"}} />
                           
                            <Link to={`/products/${prod.id}`}>
                                <h2>{prod.name}</h2>
                            </Link>
                            
                            <p>{prod.excerp}</p>

                            <span>Precio: ${prod.price}</span>

                            <span>Cantidad: {prod.cantidad}</span>


                            <span>Subtotal: ${prod.price * prod.cantidad}</span>


                            <button onClick={()=>handlerRemoveItem(prod.id)} style={{position:"absolute", top:0, right:0}}>x</button>
                        </article>
                    )

                   })
                }
            </div>
        </>
    )
}