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
            display:"grid",
            gap:"20px",
            gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",
           
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