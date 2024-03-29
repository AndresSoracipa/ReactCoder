import {Routes, Route} from "react-router-dom";
import CartProvider from "./context/CartProvider";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Checkout from "./components/Checkout/Checkout";


function App() {
  return (
    <CartProvider>
      
      <NavBar />
      
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      

    </CartProvider>
  )
  
}

export default App
