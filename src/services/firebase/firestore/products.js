import { db } from "../firebaseConfig";
import {getDocs, collection, query, where} from "firebase/firestore";

export const getProducts =(categoryId)=>{
    const productsCollection = categoryId
    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products')

return getDocs(productsCollection)
    .then(querySnapshot => {
        const productsAdepted = querySnapshot.docs.map(doc => {
            const fields = doc.data()
            return { id: doc.id, ...fields }
        });
            return productsAdepted;
        })
        .catch((error)=>{
            return error
        })
        
    }