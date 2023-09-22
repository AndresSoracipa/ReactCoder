import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { getCartTotal, mapCartToOrderItems } from "../../../src/utils";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../../services";
import ContactForm from "../ContactForm/ContactForm";



const Checkout = () => {
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { cart, clear } = useContext(CartContext);

    const total = getCartTotal(cart);

    const handleCheckout = () => {
        const order = {
            buyer: {
                name: "John",
                phone: "123",
                email: "john@example.com",
            },
            items: mapCartToOrderItems(cart),
            total,
            date: serverTimestamp(),
        };

        setIsLoading(true);
        createOrder(order).then((docRef) => {
            setOrderId(docRef.id);
            setIsLoading(false);
            clear();
        })            
    };


return (
    <div>
        <h1>Checkout</h1>

        <h2>Resumen de la compra</h2>

        {orderId && <p>El id de la orden es: {orderId}</p>}

        {!orderId && (
            <>

                <ContactForm>
                    <h4>Formulario de contacto</h4>
                </ContactForm>

                <h4>Productos</h4>
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            <p> {item.title}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Precio por unidad: ${item.price}</p>
                            <p>Subtotal: ${item.price * item.quantity}</p>

                        </li>
                    ))}
                </ul>

                <p>Total de la compra: {total}</p>

                <button onClick={handleCheckout}>Finalizar compra</button>

                {isLoading && <p>Procesando compra...</p>}
            </>
        )}
    </div>
);
};

export default Checkout;