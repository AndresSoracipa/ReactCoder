import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const   ItemList = ({items}) => {

    return (
    <div className="container"> 
        <h1 className="mb-4">ItemList</h1>

        <Link to="../Checkout">Finalizar compra</Link>


        <ul className="list-group">
            {items.map((item) => (
                <li key={item.id} className="list-group-item">
                    <Link className="text-decoration-none" to={`/item/${item.id}`}>
                    <h3 className="mb-1">{item.title}</h3>
                    <p className="mb-1">${item.price}</p>
                    <p className="mb-0">{item.categoryId}</p>
                    </Link>
                    </li>
            ))}
        </ul>
    </div>
    )
};

ItemList.propTypes = {
    items: propTypes.array.isRequired
};
export default  ItemList;