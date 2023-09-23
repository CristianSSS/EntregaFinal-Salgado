import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer({greeting}){
    return(
        <>
            <h1 style={{padding:"20px"}}>{greeting}</h1>

            <ItemList />
        </>
    )
}