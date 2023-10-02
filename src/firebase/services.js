import {doc, getDoc, getDocs, collection} from "firebase/firestore";
import { db } from "./config";

export const getProductId= async (id)=>{

    return await getDoc(doc(db, "items", id))
    
}


export const getProducts=()=>{

   return getDocs(collection(db, "items"));
    

} 

export const getProductsCategory= ()=>{

   return getDocs(collection(db, "items" ))
    
    
}
