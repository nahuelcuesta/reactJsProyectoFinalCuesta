import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './CartView.modules.css'

const CartView = () => {
    const { cart, total, removeItem } = useCart();
    return (
        <div className="CartViewContainer">
        <h1>Cart</h1>
        <section className="CartViewItems">
        {cart.map((prod) => {
            return (
            <div className="CartContainer" key={prod.id}>
                <img className='imgDetail' src={import.meta.env.BASE_URL + prod.img} alt="" />
                <h3>{prod.name}</h3>
                <h4>Cantidad: {prod.quantity}</h4>
                <h4>Precio por unidad: ${prod.price}</h4>
                <h4>Subtotal: ${prod.quantity * prod.price}</h4>
                <button className="baseButton" onClick={()=> removeItem(prod.id)}>Remover</button>
            </div>
            );
        })}
        </section>
        <section>
            <h2>Total: ${total}</h2>
        </section>
        <section>
            <Link className='GreenButton' to={'/checkout'}>Checkout</Link>
        </section>
        </div>
    );
};

export default CartView;
