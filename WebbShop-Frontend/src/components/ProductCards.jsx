    export function ProductCards({ img, product, price, stock, onPurchase, setAddToCart, addToCart }) {
       
            
        function handlePurchase() {
            
            const existingItem = addToCart.find(item => item.product === product);
            
            if (stock > 0) {
                if (existingItem) {
                    
                    setAddToCart(prevAddToCart => {
                        const updatedCart = prevAddToCart.map(item =>
                            item.product === product
                                ? { ...item, stock: item.stock + 1 }
                                : item
                        );
                        return updatedCart;
                    });
                } else {
                    console.log('Lägger till ny produkt:', product);
                    setAddToCart(prevAddToCart => {
                        const updatedCart = [
                            ...prevAddToCart,
                            { product, stock: 1, price, img }
                        ];
                        return updatedCart;
                    });
                }
                onPurchase({ img, product, price, stock });
            } 
        }
    //kolla button disabled
        return (

            <div className="cards">
                
                <img src={img} alt={product} />
                <h4>{product}</h4>
                <p>{price} kr</p>
                <p>Lagret: {stock} st </p>
                <button className={stock === 0 ? 'disabled-button' : ''} onClick={handlePurchase} >
                    Lägg till i kundvagnen
                </button>
            </div>
        );
    }