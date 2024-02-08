import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import FormInput from "./components/Form/FormInput";
import { NotificationProvider } from "./notification/NotificationService";
/* import TextReader from "./components/TextReader/TextRedader"; */

function App() {
  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <NavBar img={"./iconos/thempoIcono.png"} />
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer title={"Listado de productos"} />}
              />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer title={"Categoria: "} />}
              />
              <Route
                path="/detail/:productId"
                element={<ItemDetailContainer />}
              />
              <Route path="*" element={<h1>ERROR 404</h1>} />
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
      <FormInput />
      {/*      <TextReader/> */}
    </>
  );
}

export default App;
