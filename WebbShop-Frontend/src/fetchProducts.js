
async function fetchProducts(){
    const url = `http://localhost:3000/api/products`; 
    
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
    
}

//1
async function setInventoryOnProducts( products){
    
    const url = `http://localhost:3000/api/products/set`; 
    console.log("hej");
    
    console.log("i setInventory: ",products);
    for(let i = 0 ; i<products.length ; i++){
       delete products[i].img
       delete products[i].price
       delete products[i].product
    }


    const res = await fetch(url,{
        method: "POST",
        body: JSON.stringify({
          products:products
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
    console.log("done setting the amount");
    
   // const data = await res.json();
   // console.log(data);
   // return data;
    
}
export {fetchProducts, setInventoryOnProducts}