import PropTypes from 'prop-types';


const   ItemDetail = ({ item, isLoading }) => {
    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (!item){
        return <h2>Product not found</h2>;
    }



    return (
    <div> 
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <p>${item.price}</p>
        <p>Stock: {item.stock}</p>
        <p>Categoría:{item.categoryId}</p>
        </div>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
}



export default  ItemDetail;