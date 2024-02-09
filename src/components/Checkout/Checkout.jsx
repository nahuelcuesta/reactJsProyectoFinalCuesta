import FormInput from "../Form/FormUser";
import { useCart } from "../../context/CartContext";
import {db} from '../../services/firebase/firebaseConfig' 
import { collection, getDocs, where, query, documentId, writeBatch,addDoc } from "firebase/firestore";
import { useNotification } from "../../notification/NotificationService";
import { useState } from "react";

const Checkout = () => {
    const [orderId, setOrderId] = useState(null)
    const [userData, setUserData]= useState(null)
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart();
    const {showNotification} = useNotification()

    const createOrder = async (userData) => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    nombre: userData.nombre,
                    email: userData.email,
                    telefono: userData.telefono,
                },
                items: cart,
                total,
                };
                const batch = writeBatch(db)
                const outOfStock = []
        
                const ids = cart.map(prod => prod.id)
                const productsCollection = query(collection(db, 'products'), where(documentId(), 'in' , ids))
        
                const querySnapshot = await getDocs(productsCollection)
                const {docs} = querySnapshot
        
                docs.forEach(doc =>{
                    const fields = doc.data()
                    const stockDb = fields.stock
        
                    const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                    const prodQuantity = productsAddedToCart.quantity
                    console.log(stockDb >= prodQuantity);
        
                    if (stockDb >= prodQuantity){
                        batch.update(doc.ref, {stock: stockDb - prodQuantity})
                    }else{
                        outOfStock.push({id: doc.id, ...fields})
                    }
                })
        
                if(outOfStock.length === 0){
                    batch.commit()
        
                    const orderCollection = collection(db, 'orders')
                    const {id} = await addDoc(orderCollection, objOrder)
                    setOrderId(id)
                    clearCart()
                }else{
                    showNotification('error', 'Hay productos que no tienen stock disponible')
                }
                setUserData(userData)
        } catch (error) {
            showNotification('error', 'Error al cargar la orden')
        }finally{
            setLoading(false)
        }

        
    }

    if(loading){
        return (
            <h1>Se esta generando su orden...</h1>
        )
    }

    if (orderId){
        return (
            <div>
                <h1>Gracias {userData.nombre} por tu compra </h1>
                <p>El id es: {orderId}</p>
            </div>
        )
        
        
    }

    return (
        <>
        <h1>CHECKOUT</h1>
        <FormInput onCreate={createOrder}/>        
        </>
    );
};

export default Checkout;