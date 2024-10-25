
import express from "express"
import cors from "cors"
import * as db from "./handleDB.js"
const PORT = 3000;

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/products', async (req, res) =>{
    const products = await db.getAllProducts()
    console.log(products)
    res.json(products)
})

//1
app.post('/api/products/set', async(req, res) => {
    console.log(req.body);
    let {products} = req.body
    
    db.setInventoryOnProduct(products) //test id 0 , amount 1
    console.log("setAmount har körts--");
});

app.listen(PORT, ()=>{
    console.log("listening on port", PORT);
});





