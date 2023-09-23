import { useEffect, useState } from 'react'
import Item from '../../components/Item/Item'
import { getProductsCategory } from '../../mock'
import { useParams } from 'react-router-dom';

export default function Categories(){

    const[product, setProduct] = useState([]);
    const path = useParams();
    useEffect(()=>{
        
      
        getProductsCategory(path.category)
        .then(prod=>setProduct(prod))

    },[path])

    return(
        <>
            {
                product.map((prod)=>{
                    
                  return  <Item key={prod.id} data={prod} />
                })
            }
        </>
    )
}