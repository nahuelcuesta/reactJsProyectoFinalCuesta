/* import { getProductsById } from "../AsyncMock/AsyncMock"; */
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {getDoc, doc, QueryDocumentSnapshot} from "firebase/firestore"
import {db} from "../../services/firebase/firebaseConfig"
import { useNotification } from "../../notification/NotificationService";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null);
    const {productId} = useParams();
    const {showNotification} = useNotification();


    useEffect(()=>{
        if(product)document.title = product.name
        return ()=>{
            document.title = 'Thempo'
        }
    },[product])

    useEffect(() => {
setLoading(true)
const productDocument = doc(db, 'products', productId)
getDoc(productDocument)
.then(queryDocumentSnapshot =>{
    const fields = queryDocumentSnapshot.data()
    const productAdapted = {id: queryDocumentSnapshot.id, ...fields}
    setProduct(productAdapted)
    })
    .catch(error =>{
        showNotification('error', 'error: ', error)
    })
    .finally(()=>{
        setLoading(false)
    })
        /* getProductsById(productId).then((product) => {
        setProduct(product);
        }); */
    }, [productId]);

    return (
        <div>
        <h1>Detalle de producto</h1>
        <ItemDetail {...product} />
        </div>
    );
};

export default ItemDetailContainer;
