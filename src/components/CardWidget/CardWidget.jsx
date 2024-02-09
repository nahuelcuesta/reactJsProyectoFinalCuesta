import React from "react";
import "./CardWidget.modules.css"
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function ({img}) {
  const {totalQuantity} = useCart();

  return (
    <div className="CarWidgetContainer">
      <Link to={'/cart'}> <img src={img} alt="Icono bolsa de compras" /> </Link>
      <p>{totalQuantity}</p>
    </div>
  );
}
