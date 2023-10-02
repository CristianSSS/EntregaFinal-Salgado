import { useEffect, useState } from 'react'
import Item from '../../components/Item/Item'
import { useParams } from 'react-router-dom';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import { getProductsCategory } from '../../firebase/services';

export default function Categories(){

    const[product, setProduct] = useState([]);
    const path = useParams();
    useEffect(()=>{
        
        getProductsCategory()
        .then(snapshots=>{
            const prod = snapshots.docs.map((snapshot)=>({ id:snapshot.id, ...snapshot.data()}))
            const prodCate = prod.filter((prod)=> prod.category === path.category);
            
            setProduct(prodCate)
       })
       
    },[path])

  
    return(
        <>
            <ItemListContainer greeting={ product[0] ? `Categoria: ${product[0].category}` : "" } data={product} />
        </>
    )
}