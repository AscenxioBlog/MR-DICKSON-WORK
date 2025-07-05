import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../ReusableComponent/CartContext";

function ProdCard({ product }) {
    const { addToCart } = useContext(CartContext);
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleAddToCart = (item) => {
        addToCart(item, (addedItem) => {
            setAlertMessage(`${addedItem.productName} added to cart!`);
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
        });
    };


  return (
    <div
      key={`${product._id}`}
      className="card bg-white shadow-md hover:shadow-xl transition-shadow group w-[12rem]"
    >   
        <div>,</div>
      {/* Product Image with Badges */}
      <Link to={`/singleproduct/${product._id}`}>
        <figure className="relative pt-[70%] overflow-hidden bg-yellow-300">
          <img
            src={product.image}
            alt={product.productName}
            className="absolute top-0 left-0 w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
         
        </figure>
      </Link>

      {/* Product Info */}
      <div className="card-body p-4">
        <h3 className="card-title text-sm md:text-base font-semibold line-clamp-2 min-h-[3em] ">
          {product.productName}
        </h3>
      
        <div className="flex items-center justify-between mt-2">
          <div>
            <span className="font-bold text-textc">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice > product.price && (
              <span className="text-xs text-gray-400 line-through ml-2">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            className="btn btn-sm bg-textc hover:bg-textc border-none text-white"
            onClick={() => handleAddToCart(product)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProdCard;
