import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import { useDataContext } from "../../context/data/DataContext";

import "./mobile.layout.css";
import "./desktop.layout.css";

export const ProductDetailCard = () => {
  const { products } = useDataContext();
  const { productId } = useParams();

  const product = products.find((product) => product?.id === productId);

  const discount =
  ((product?.originalPrice - product?.price) / product?.originalPrice) * 100;

const getRatingColor = (averageRating) =>
  averageRating < 2
    ? { color: "red" }
    : averageRating < 3
    ? { color: "orange" }
    : { color: "#45c045" };

  return (
    <div className="product-detail-card">
      <img src={product?.imgSrc} alt={product?.productName} width={300} height={250}/>
      <div className="details">
      <h1 className="product-name">{product?.productName}</h1>
      <p className="rating" style={getRatingColor(product?.averageRating)}>
        {product?.averageRating} <FontAwesomeIcon icon={faStar} />
      </p>
      <p className="description">{product?.productDescription}</p>
      <div className="price-container">
        <p>INR {product?.price}</p>
        <p className="original-price">INR {product?.originalPrice}</p>
        <p className="discount">({discount.toFixed(0)}% Off) </p>
      </div>

      <button> <FontAwesomeIcon icon={faShoppingCart} className="icon" /> Add to Cart</button>
      <button className="btn-wishlist"> <FontAwesomeIcon icon={faHeart} className="icon" /> Add to Wishlist</button>
      </div>
    </div>
  );
};
