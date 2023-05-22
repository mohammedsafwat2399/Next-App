import axios from "axios";
import ProductList from "../components/products/ProductList";
import { Fragment } from "react";
import Head from "next/head";
import { dbConnect } from "../util/mongo";
import product from "../models/product";
 

function HomePage(props) {   
  return (
    <Fragment>
    <Head>
      <title>Products</title>
      <meta name="description"  content="Browse a list of new products"/>
      <link rel="shortcut icon" href="favicon.ico"/>
    </Head>
    <ProductList products={props.products} />
  </Fragment>
  );
}
export default HomePage;

export async function getServerSideProps() {
  dbConnect()
  const productsData = await product.find()
  // fath api
 //const res= await axios.get(`${process.env.APP_DEV || process.env.APP_PROD}/api/products`)

   return {
    props: {
      products:productsData.map((product)=>({
        id:product._id.toString(),
        name:product.name,
        image:product.image,
        price:product.price
      })),
    },
   };
}
 