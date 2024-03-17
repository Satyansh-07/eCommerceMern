const express = require("express");
const databaseConnection = require("./database");
const productModel = require("./model/productModel");
const cors = require('cors');
databaseConnection();
const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  try {
    let data = await productModel.distinct('category');
    res.send(data);
  } catch (err) {
    console.log("Error in connection" + err);
  }
});

app.get('/featuredProducts', async (req, res) => {
  try{
    let data = await productModel.find().limit(8);
    res.send(data);
  }
  catch(err){
    console.log('Error in fetching featured products' + err);
  }
})

app.listen(1338, () => {
  console.log("Ecommerce server is up and running!!");
});
