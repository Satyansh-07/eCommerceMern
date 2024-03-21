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

app.get('/category/:id', async (req, res) => {
  try{
    let data;
    if(!parseInt(req.params.id)){
      data = await productModel.find();
    }
    else{
      data = await productModel.find({categoryId : parseInt(req.params.id)}).exec();
    }
    res.send(data);
  }
  catch(err){
    console.log('Error in fetching featured products' + err);
  }
})

app.get('/fetchProduct/:pid', async (req, res) => {
  try{
    if(!parseInt(req.params.pid)){
      res.send('Not found').status(404);
    }
    else{
      let data;
      data = await productModel.findOne({id : parseInt(req.params.pid)}).exec();
      res.send(data);
    }
  }
  catch(err){
    console.log("Error occured" + err);
  }
})

app.listen(1338, () => {
  console.log("Ecommerce server is up and running!!");
});
