import { createContext, useState } from "react";

export const CartContext= createContext({
    cart:[]
});


export const CartProvider = ({children})=>{

    const [cart, setCart]=useState([]);

 

    const addItem =(item, cantidad)=>{

        if(!isInCart(item.id)){

            setCart(prev => [...prev, {...item, cantidad}]);
            

        }else{
            console.error("Este producto ya esta en el carrito");
        }

        
    }

    const removeItem =(itemId)=>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    }

    const clearCart =()=>{
        setCart([]);
    }

    const isInCart=(itemId)=>{

        return cart.some(prod => prod.id === itemId);
    }

    const getCart=()=>{
        
        return cart;
        
    }

    return(
        <CartContext.Provider value={{addItem, removeItem, clearCart, isInCart, getCart}}>
            {children}
        </CartContext.Provider>
    )
}

