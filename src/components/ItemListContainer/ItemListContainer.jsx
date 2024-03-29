import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts} from "../../services";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const [isLoading, setIsloading] = useState (true);
    const { categoryId } = useParams();


    useEffect(() => {
        console.log("useEffect", categoryId);

        setIsloading(true);

        getProducts(categoryId).then((response) => {
            setItems(response);
            setIsloading(false);
        });

    }, [categoryId]);


    return <ItemList items={items} isLoading={isLoading}/>;

};

export default ItemListContainer;