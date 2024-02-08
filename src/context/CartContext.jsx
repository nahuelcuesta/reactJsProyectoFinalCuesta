import { createContext, useState } from "react";
import { useContext } from "react";
import { useNotification } from "../notification/NotificationService";

const CartContext = createContext({
    cart: [],
    addItem: ()=>{},
    removeItem: ()=>{},
    totalQuantity: 0,
    total:0,
    clearCart: ()=>{},
});

export const CartProvider = ({ children }) => {
    const {showNotification} = useNotification();
    const [cart, setCart] = useState([]);
    

    const addItem = (productToAdd)=>{
  
        if(!isInCart(productToAdd.id)){
            setCart(prev =>[...prev, productToAdd])
        } else{
            setTimeout(() => {
                showNotification('error', 'El producto ya está en el carrito');
            }, 0);

        }
    }

    const isInCart = (id)=>{
        return cart.some(item=>item.id === id)
    }

    const removeItem = (id) =>{
        const cartUpdated = cart.filter(item => item.id === id)
        setCart(cartUpdated)
    }

    const getTotalQuantity = ()=>{
        let accu = 0;

        cart.forEach(item => {
            accu += item.quantity
        })
        return accu
    }

    const totalQuantity = getTotalQuantity();
    
    //completar
    const getTotal = ()=>{

    }
    const total = getTotal();

    const clearCart = ()=>{
        setCart([])
    }


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, total, clearCart }}>
        {children}
        </CartContext.Provider>
    );
};

export const useCart = ()=>{
    return useContext(CartContext)
}