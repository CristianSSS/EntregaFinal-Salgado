import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getProductId } from "../../mock";
import Skeleton from "../Skeleton/Skeleton";

export default function ItemDetailContainer(){

    const [product, setProduct] = useState(null);

    const {id} = useParams();

    useEffect(()=>{

        getProductId(+id)
        .then(produ => setProduct(produ))

    },[id])


    return(
        <>
            { product ?  <ItemDetail data={product} /> : <Skeleton/> }
                   
        </>
    )
}