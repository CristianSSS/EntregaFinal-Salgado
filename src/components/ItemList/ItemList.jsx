import Item from "../Item/Item";
import { getAllProducts } from "../../mock";
import { useEffect, useState } from "react";
import Skeleton from "../Skeleton/Skeleton";

export default function ItemList({data}){

    const [products, setProducts] = useState([]);

    useEffect(()=>{

        setProducts(data);

    },[data]);

    return(
        <div
        style={{
            display:"flex",
            gap:"20px",
            flexWrap:"wrap",
            justifyContent:"center"
           
        }}
        >

        {
            products[0] ? "": (
                <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                </>
                
            )
        }
        
        {
            products.map(product =>{
                return(
                    <Item key={product.id} data={product} />
                )
            })
        }
       
        </div>
    )

}