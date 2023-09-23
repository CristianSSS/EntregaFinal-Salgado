import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import Button from  "../Button/Button"
export default function ItemDetail({data}){
    const {name, description, pictureUrl, stock} = data;
    console.log(data)
    return(
        <>

            <dir className="layout-item-detail">

                <img className="detail-product-img" src={pictureUrl} alt={name}/>

                <div className="detail-info">

                    <h1>{name}</h1>

                    <p>{description}</p>

                </div>
               
                <ItemCount className="detail-button-stock" initial={1} stock={stock}/>
                <Button  className="detail-button-addtocart" text="Agregar al carrito" action={null} ></Button>

            </dir>

            

        </>
    )
}