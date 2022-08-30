const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');

const Product = require('./database/models/product')
app.use(express.json());

/*
CORS - Cros Origin Req Security 
back-end: port 3000
front-end: port 4200
*/
app.use((req,res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/*
Product: Create, Update, ReadOne, ReadAll, Delete
*/

app.post('/products',(req,res) => {
  (new Product({
    "pName": req.body.pName,
    "price": req.body.price
  }))
    .save()
    .then((pList) => res.send(pList))
    .catch((error) => console.log(error));
})
/*------------------------------
  GET all products
--------------------------------*/
app.get('/products',(req,res) => {
    Product.find({})
      .then((pList) => res.send(pList))
      .catch((error) => console.log(error));
})
/*--------------------------------
 GET product with uid. | Need to fix
----------------------------------*/
app.get('/products/:pId',(req,res) => {
  Product.find({ _id: req.params.pId})
  .then((pList) => res.send(pList))
  .catch((error) => console.log(error));
});
/*--------------------------------
  PATCH (update) product details.
----------------------------------*/
app.patch('/products/:pId',(req,res) => {
  Product.findOneAndUpdate({ _id: req.params.pId}, { $set: req.body})
  .then((pList) => res.send(pList))
  .catch((error) => console.log(error));
});
/*--------------------------------
  DELETE product. | Need to fix
----------------------------------*/
app.delete('/products/:pId',(req,res) => {
  const deleteProducts = (products) => {
    Product.deleteMany({_id: pId.req.params.pId})
    .then(() => products)
    .catch((error) => console.log(error));
  }
});

app.listen(3000, () => console.log("Server is on port 3000"));