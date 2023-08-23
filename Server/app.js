const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product-schema');
const cors = require('cors'); 

app.use(cors());

const dbURL = 'mongodb+srv://Animeshak:animeshkambhale@cluster0.qgeeqym.mongodb.net/e-commerce?retryWrites=true&w=majority'
mongoose.connect(dbURL,{useNewUrlParser: true, useUnifiedTopology:true})
    .then((result)=> app.listen(3000))
    .catch((err)=> console.log(err))



// app.get('/', (req,res)=> {
//     res.send('<h1>hello world</h1>');
// })


app.get('/add-product', (req,res)=> {
    const product = new Product({
        brand_name:"apple",
        price:"98000",
        product_name:"iphone 14 pro max",
        stock:"25"
    });

    product.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.get('/products',(req,res)=>{
    Product.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    });
})