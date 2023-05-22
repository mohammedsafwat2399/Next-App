import mongoose, {models} from "mongoose";
// data types database

const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxlength:60
        },
        desc:{
            type:String,
            required:true,
            maxlength:200
        },
        image:{
            type:String,
            required:true,
         },
        price:{
            type:Number,
            required:true,
         },
    },
    {timestamps: true} // time created
)
 
const product = models.product || mongoose.model("product", productSchema) 
export default product