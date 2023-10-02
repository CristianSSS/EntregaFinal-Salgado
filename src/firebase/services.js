import {doc, getDoc, collection} from "firebase/firestore";
import { db } from "./config";

export const getProductId= async (id)=>{

    return await getDoc(doc(db, "items", id))
    
}


