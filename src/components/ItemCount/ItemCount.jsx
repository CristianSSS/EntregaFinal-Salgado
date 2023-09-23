import './ItemCount.css'
import { useState } from 'react'
import Button from '../Button/Button';

export default function ItemCount({initial, stock, action}){

    const [count, setCount] = useState(initial);

    const sumar =()=> count < stock ? setCount(count + 1) : null;
    

    const restar =()=> count > 1 ? setCount(count - 1) : null;

    const addToCart=()=>{
        action(count);
    }
        

    return(
        <div style={{display:"flex", flexWrap:"wrap"}}>
        <div className='item-count'>

            <button className='item-count__btn' onClick={restar}>-</button>

            <span className='item-count__number'>{count}</span>

            <button className='item-count__btn' onClick={sumar}>+</button>

            

        </div>

        <Button  className="detail-button-addtocart" text="Agregar al carrito" action={addToCart} ></Button>

       </div>
    )
}