import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct} from "../../services";
import ItemDeatail from '../ItemDetail/ItemDetail';

const   ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getProduct(id).then((response) => {
            setItem(response);
        })
        .catch((error) => {
            console.log(error);
            setItem(null);
        })

    }, [id])


    return <ItemDeatail item={item}/>;
};
export default ItemDetailContainer;