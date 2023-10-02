import { useEffect, useState } from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import { getAllProducts } from '../../mock';
import {getFirestore, getDoc, collection} from "firebase/firestore"

export default function Products(){

    const [products, setProducts] = useState([]);

    useEffect(()=>{

        const db = getFirestore();
        const items = collection(db, "items")
        
       
        getDoc(items)
        //getAllProducts()
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