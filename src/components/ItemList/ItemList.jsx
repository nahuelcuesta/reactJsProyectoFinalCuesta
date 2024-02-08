import Item from "../Item/Item";
import './ItemList.modules.css'

const ItemList = ({ products }) => {
    return (
        <div className="ItemListContainer">
        {
            products.map((product) => {
                return (
                <div key={product.id}  >
                    <Item {...product}/>
                </div>
                );
            })
        }
        </div>
    );
};

export default ItemList;
