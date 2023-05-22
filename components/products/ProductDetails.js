import Card from "../ui/Card";
import Image from "next/image";
import classes from "./ProductDetails.module.css";

function ProductDetails(props){
    return(
        <section className={classes.detail}>
             <Card>
        <div className={classes.image}>
          <Image src={props.image} alt={props.name} fill={true} />
        </div>
           <h1>{props.name}</h1>
          <span>${props.price}</span>
          <p>{props.desc}</p>
         
      </Card>
        </section>
    )
}
export default ProductDetails