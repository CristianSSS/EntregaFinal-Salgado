import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"


export default function ItemDetail({data}){
    const {name, description, img, stock} = data;
   
    return(
        <>
            <h1>{name}</h1>
            <ItemCount initial={1} stock={stock}/>
      
        </>
    )
}