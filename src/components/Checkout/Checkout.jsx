import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { getCartTotal } from "../../../src/utils";




const Checkout = () => {
    const { cart } = useContext(CartContext);

    const total = getCartTotal(cart);


    return (
        <div>
            <h1>Checkout</h1>

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
        </div>
    );
};

export default Checkout;