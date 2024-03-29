import {useContext} from "react";
import CartContext from "../../context/CartContext";
import { getCartQuantity } from "../../utils";

const CartWidget = () => {
    const {cart} = useContext(CartContext);

    const quantity = getCartQuantity(cart);


    return <div>CartWidget {!!quantity && quantity} </div> 
            
};

export default CartWidget;
