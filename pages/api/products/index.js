// // creating endpoints === route
// //http://localhost:3000/api/products
// // back end server 

import product from "../../../models/product";
import { dbConnect } from "../../../util/mongo";
// req  http res server
 
export default async function  handler (req, res){
const { method} = req
dbConnect()
if(method === "GET"){
    try {
       const products =await product.find()
       res.status(200).json({data:products})
    } catch (error) {
      res.status(500).json({messeg: error})

    }

}
if(method === "POST"){
  try {
     await product.create(req.body)
     res.status(201).json({messeg:"product created"})

  } catch (error) {
    res.status(201).json({messeg:error})

  }
}
}