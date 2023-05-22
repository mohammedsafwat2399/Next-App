import Card from "../ui/Card";
import classes from "./NewProductForm.module.css";
import { useRef } from "react";

function NewProductForm(props) {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const priceInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const productData ={
      name:enteredName,
      image:enteredImage,
      desc:enteredDescription,
      price:enteredPrice

    }
    props.onAddProductData(productData)
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Product Name</label>
          <input type="text" id="name" required ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Product Image</label>
          <input type="url" id="image" required ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            required
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input type="text" id="price" required ref={priceInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Product</button>
        </div>
      </form>
    </Card>
  );
}

export default NewProductForm;
