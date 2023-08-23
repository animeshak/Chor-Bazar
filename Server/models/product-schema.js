const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    brand_name : {
        type : String,
        required : true
    },
    price:{
        type : String,
        required : true
    },
    product_name:{
        type : String,
        required : true
    },
    stock:{
        type : String,
        required : true
    }
},{timestamps : true});

const Product = mongoose.model('Product',productSchema);
module.exports = Product; 