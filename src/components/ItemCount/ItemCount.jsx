import './ItemCount.css'
import { useState } from 'react'

export default function ItemCount({initial, stock}){

    const [count, setCount] = useState(initial);

    const sumar =()=> count < stock ? setCount(count + 1) : null;
    

    const restar =()=> count > 1 ? setCount(count - 1) : null;
        

    return(
       <div className='item-count'>

        <button className='item-count__btn' onClick={restar}>-</button>

        <span className='item-count__number'>{count}</span>

        <button className='item-count__btn' onClick={sumar}>+</button>

       </div>
    )
}