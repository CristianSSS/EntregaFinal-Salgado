import {doc, getDoc, getDocs, collection} from "firebase/firestore";
import { db } from "./config";

export const getProductId= async (id)=>{

    return await getDoc(doc(db, "items", id))
    
}


export const getProducts=()=>{

   return getDocs(collection(db, "items"));
    

} 

export const getProductsCategory=(categoria)=>{

    const products = getDocs(collection(db, "items" ));

    const prod = products.docs.map((pro)=>({ id:pro.id, ...pro.data()}))

    console.log(prod)

    const prodCate = prod.filter((prod)=> prod.category === categoria);

    return prodCate;
    
}
