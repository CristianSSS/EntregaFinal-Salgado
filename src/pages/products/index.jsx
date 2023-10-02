import { useEffect, useState } from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import { getProducts } from '../../firebase/services';

export default function Products(){

    const [products, setProducts] = useState([]);

    useEffect(()=>{
       
        getProducts()
        .then((snapshots)=>{
            
            const datos = snapshots.docs.map(snapshot=>({id:snapshot.id, ...snapshot.data()}))
            setProducts(datos);
          
        })

        
    }, []);

    return(
        <>
             <ItemListContainer data={products} greeting="Productos" />
        </>
    )
}