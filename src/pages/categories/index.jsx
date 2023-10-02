import { useEffect, useState } from 'react'
import Item from '../../components/Item/Item'
import { useParams } from 'react-router-dom';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import { getProductsCategory } from '../../firebase/services';

export default function Categories(){

   

    const[product, setProduct] = useState([]);
    const path = useParams();
    useEffect(()=>{
        
        getProductsCategory(path.category)
        .then(prod=>setProduct(prod))

    },[path])

  
    return(
        <>
            <ItemListContainer greeting={ product[0] ? `Categoria: ${product[0].category}` : "" } data={product} />
        </>
    )
}