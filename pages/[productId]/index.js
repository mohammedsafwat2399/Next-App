import mongoose from "mongoose";
import ProductDetails from "../../components/products/ProductDetails";
import product from "../../models/product";
import { dbConnect } from "../../util/mongo";
import { Fragment } from "react";
import Head from "next/head";
function ProductDetailsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Product Details</title>
        <meta name="description" content="Browse Product Details" />
      </Head>
      <ProductDetails
        name={props.productData.name}
        price={props.productData.price}
        image={props.productData.image}
        desc={props.productData.desc}
      />
    </Fragment>
  );
}

export default ProductDetailsPage;
export async function getStaticPaths() {
  dbConnect();
  const products = await product.find({}, { _id: 1 });
  return {
    fallback: false,
    paths: products.map((product) => ({
      params: { productId: product._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const productId = context.params.productId;
  const selectedProduct = await product.findById({
    _id: new mongoose.Types.ObjectId(productId),
  });
  // select product from database
  return {
    props: {
      productData: {
        image: selectedProduct.image,
        name: selectedProduct.name,
        price: selectedProduct.price,
        desc: selectedProduct.desc,
        id: selectedProduct._id.toString(),
      },
    },
  };
}
