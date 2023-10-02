import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { json, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import SkeletonDetail from "../SkeletonDetail/SkeletonDetail";
import { getProductId } from "../../firebase/services";


export default function ItemDetailContainer(){

    const [product, setProduct] = useState(null);

    const {id} = useParams();

    useEffect(()=>{

       getProductId(id)
        .then((produ)=>{
            setProduct({id:produ.id, ...produ.data()})
        })
        .catch(err => console.log(err))
        .finally()

    
    },[id])


    return(
        <>
            { product ?  <ItemDetail data={product} /> : <SkeletonDetail/> }
                   
        </>
    )
}