import {model, Schema} from 'mongoose'


const productSchema = new Schema({


    name: {
        type:String,

    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    imageUrl: {
        type: String
    }

})


const Product = model('products', productSchema)
export default Product