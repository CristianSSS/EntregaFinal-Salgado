import { useEffect, useState } from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import { getAllProducts } from '../../mock';

export default function Products(){

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getAllProducts()
        .then(data=>{
            setProducts(data)
          
        })

        
    }, []);

    return(
        <>
             <ItemListContainer data={products} greeting="Productos" />
        </>
    )
}