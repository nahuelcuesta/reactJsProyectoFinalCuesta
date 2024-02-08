import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useNotification } from '../../notification/NotificationService';


const ItemDetail = ({ id, name, img, category, price, description, stock }) => {
const [quantity, setQuantity] = useState(0);
const {addItem} = useCart();

const {showNotification} = useNotification();

    const handleOnAdd = (quantity)=>{
    const objProductToAdd ={
        id,
        name,
        quantity,
        price
    }
    addItem(objProductToAdd)
    showNotification('success', `se agregaron correctamente ${quantity} ${name}`)
    setQuantity(quantity)
}

    return (
        <div className="itemContainer">
        <img src={import.meta.env.BASE_URL + img} alt={name} />
        <h1>{name}</h1>
        <p>$ {price}</p>
        <p>{description}</p>
        <ItemCount stock={stock} onAdd={handleOnAdd}/>
        </div>
    );
};

export default ItemDetail;
