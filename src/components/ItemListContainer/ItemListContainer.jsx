import "./ItemListContainer.modules.css";
/* import { getProducts, getProductsByCategory } from "../AsyncMock/AsyncMock"; */
import { useState, useEffect, memo } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import {getDocs, collection, query, where} from "firebase/firestore";
import { useNotification } from "../../notification/NotificationService";

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

const productsCollection = categoryId
    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products')

getDocs(productsCollection)
.then(querySnapshot => {
  const productsAdepted = querySnapshot.docs.map(doc => {
    const fields = doc.data()
    return { id: doc.id, ...fields }
  });
  setProducts(productsAdepted);
})
.catch((error)=>{
  showNotification('error', 'hubo un error: ', error,)
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
