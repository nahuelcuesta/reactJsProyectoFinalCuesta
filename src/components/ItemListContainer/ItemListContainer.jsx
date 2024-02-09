import "./ItemListContainer.modules.css";
import { useState, useEffect, memo } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import {getDocs, collection, query, where} from "firebase/firestore";
import { useNotification } from "../../notification/NotificationService";
import { getProducts } from "../../services/firebase/firestore/products";

const ItemListMemorized = memo(ItemList)

const ItemListContainer = ({ title }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();
  const {showNotification} = useNotification();

  useEffect(()=>{
    if(categoryId) document.title = 'Thempo '+ categoryId
    return ()=>{
        document.title = 'Thempo'
    }
},[categoryId])

useEffect(() => {
setLoading(true)

getProducts(categoryId)
.then(products =>{
  setProducts(products)
})
.catch(error=>{
  showNotification('error', 'hubo un error')
})
.finally(()=>{
        setLoading(false)
        }) 

  }, [categoryId]);

  if (loading){
    return(
      <h1>CARGANDO</h1>
    )
  }

  return (

    <>
    
    <h1>{title + (categoryId ?? " ")}</h1>
    <ItemListMemorized products={products} />

    </>
  );
};

export default ItemListContainer;
