import Item from "../Item/Item";
import { getAllProducts } from "../../mock";
import { useEffect, useState } from "react";
import Skeleton from "../Skeleton/Skeleton";
export default function ItemList(){

    const [products, setProducts] = useState([]);

    useEffect(()=>{

        getAllProducts()
        .then(data=>{
            setProducts(data)
            console.log(data)
        })

        

    },[]);

    return(
        <div
        style={{
            display:"grid",
            gap:"20px",
            gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",
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