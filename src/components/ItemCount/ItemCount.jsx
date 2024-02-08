import { useState } from "react";
import "./ItemCount.modules.css";

const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="counterContainer">
      
      <section className="buttonsContainer">
        <div className="operatorsContainer">
        
          <button onClick={decrement}>-</button>
          <p>{count}</p>
          <button onClick={increment}>+</button>
        </div>
        <button className="buttonOnAdd" onClick={() => onAdd(count)}>Agregar al Carrito</button>
      </section>
    </div> 
  );
};

export default ItemCount;
