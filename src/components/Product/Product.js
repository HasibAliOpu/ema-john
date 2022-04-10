import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";
const Product = (props) => {
  const { handleAddToCart, product } = props;
  const { name, img, price, ratings, seller } = product;
  return (
    <div className="product">
      <img src={img} alt="shoe" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small> Manufacturer:{seller}</small>
        </p>
        <p>
          <small>Rating:{ratings} star</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
