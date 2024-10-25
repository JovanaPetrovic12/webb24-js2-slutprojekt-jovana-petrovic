import { ProductCards } from "./ProductCards"

/*const products = [
    {
        product: 'Hund Godis',
        price: '99kr',
        stock: '5st'
    },
    {
        product: 'Hund Mat',
        price: '285kr',
        stock: '10st'
    },
    {
        product: 'Regn Jacka',
        price: '410kr',
        stock: '2st'
    },
    {
        product: 'Sele',
        price: '289kr',
        stock: '0st'
    },
    {
        product: 'Leksak',
        price: '55kr',
        stock: '7st'
    }
]*/
export function ProductContainer ({products, onPurchase, setAddToCart, addToCart}) {
    
    
    return (
        
        <div className="flexproducts">
            <h2 className="mainh2">Pretty Products</h2>
            {products.map(({img, product, price, stock}, id) => 
                 <ProductCards 
                    key={id} 
                    {...product}
                    img={img} 
                    product={product} 
                    price={price} 
                    stock={stock} 
                    onPurchase={onPurchase} 
                    setAddToCart={setAddToCart}
                    addToCart={addToCart}
                />
            )}
        </div>
    )
}