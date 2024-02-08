import React from "react";
import "./CardWidget.modules.css"
import { useCart } from "../../context/CartContext";

export default function ({img}) {
  const {totalQuantity} = useCart();

  return (
    <div className="CarWidgetContainer">
      <img src={img} alt="Icono bolsa de compras" />
      <p>{totalQuantity}</p>
    </div>
  );
}
