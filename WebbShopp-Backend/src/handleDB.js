import { log } from 'console';
import fs from 'fs/promises';

async function getAllProducts(){
    const rawdata = await fs.readFile('./src/products.json');
    return JSON.parse(rawdata);
}

async function setInventoryOnProduct(products){
    console.log(products)
    const rawdata = await fs.readFile('./src/products.json');
    let dbObject= JSON.parse(rawdata);
    //console.log("setAmount på id:",id," amount:",amount,dbObject);
    
    for (let i = 0; i < products.length; i++) {
        dbObject[i].stock = dbObject[i].stock - products[i].stock;
    }
    //dbObject[id].stock = amount
    
    console.log("CHOOSEN PRODUCT",dbObject);   

    //write to file
    await fs.writeFile('./src/products.json', JSON.stringify(dbObject, null, 2));
}


export {getAllProducts, setInventoryOnProduct};