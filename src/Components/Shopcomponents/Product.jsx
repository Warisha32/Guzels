import React from 'react';
import "../../Styles/main.scss"
import landing from "../../Assets/images/landing.png"
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../Redux/Shopping/Actions";
const Product = ({ product, addToCart, loadCurrentItem }) => {
    return(

<div className="column">
<div className="productImage">
<img className="ProductPicture" src={product.image} alt="img" />
</div>
<div className="productText">
    <div className="Head">
    <div className="chronicles_head">{product.title}</div> <div className="priceTag">{product.price}</div><br></br>
    </div>
    <div>{product.description}</div>
</div>
<div className="button">
<button className="Buy"onClick={() => addToCart(product.id)}><div className="buyText">Buy</div></button>
</div>
</div>
    )
 };





 const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
      loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
  };

  export default connect(null, mapDispatchToProps)(Product);

 