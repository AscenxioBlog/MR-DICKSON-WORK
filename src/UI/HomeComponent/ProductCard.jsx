import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/${product.productName}/${product._id}`}>
      <div className=" w-[12rem] flex flex-col pt-3 duration-200 rounded-sm overflow-hidden hover:border hover:border-iconColor hover:shadow-md group">
        <div className=" h-[50%] ">
          <img
            src={product.image}
            alt={product.productName}
            className="md:w-[100%] md:h-[100%] w-[70%] h-full m-auto md:object-contain overflow-clip duration-200 group-hover:scale-[1.05]"
          />
        </div>
        <div className="p-4 ">
          <h3 className=" capitalize text-gray-800 truncate">
            {product.productName}
          </h3>
          <div className=" md:flex items-center ">
            <div>
              <span className=" text-[0.85rem] font-semibold ">
                ₦{product.price.toLocaleString()}
              </span>
              <span className="text-gray-500 text-[0.8rem] ml-1 line-through text-sm">
                ₦{product.oldPrice.toLocaleString()}
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </Link>
    
  );
};

export default ProductCard;
