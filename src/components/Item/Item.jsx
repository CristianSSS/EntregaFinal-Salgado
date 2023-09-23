
import ItemCount from "../ItemCount/ItemCount"
import "./Item.css";
import { Link } from "react-router-dom";


export default function Item({data}){

    const toProductDetail=()=>{
        
    }

    return(
        <article className="card-product">

            <img className="card-product__img" src={data.pictureUrl} alt="imagen" />
            <h3 className="card-product__title">{data.name}</h3>
            <span className="card-product__price">${data.price}</span>
            <p className="card-product__description">{data.excerp}</p>
            
            <Link to={`/products/${data.id}`}>Ver producto</Link>

        </article>
    )
}