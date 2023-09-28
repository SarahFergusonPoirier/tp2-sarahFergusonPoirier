import SingleProduct from './SingleProduct'

const ManyProducts = ({products, onDeleteMany, onUpdateMany}) => {
    return (
        <>
            {products.map((product) => (<SingleProduct key={product.id} product={product}
            onDelete={onDeleteMany} onUpdate={onUpdateMany}/>))}
        </>
    )
}

export default ManyProducts