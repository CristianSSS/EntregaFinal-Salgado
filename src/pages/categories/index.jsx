import { useEffect, useState } from 'react'
import Item from '../../components/Item/Item'
import { getProductsCategory } from '../../mock'
import { useParams } from 'react-router-dom';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

export default function Categories(){

   

    const[product, setProduct] = useState([]);
    const path = useParams();
    useEffect(()=>{
        
        getProductsCategory(path.category)
        .then(prod=>setProduct(prod))

    },[path])

    console.log(product)
    return(
        <>
            <ItemListContainer greeting={ product[0] ? `Categoria: ${product[0].category}` : "" } data={product} />
        </>
    )
}