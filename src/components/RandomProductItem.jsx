import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

export const RandomProductItem = ({ product }) => {
  const { addPurchase, removePurchase, shoppingList } = useContext(CartContext);
  const clickAdd = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    addPurchase(product);
  };

  const clickRemove = (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    removePurchase(id);
  };

  const isAdded = shoppingList.map((item) => item.id).includes(product.id);

  return (
    <NavLink
      to={`/product/${product.id}`}
      key={product.id}
      className="flex flex-col justify-between w-48 md:w-1/4 gap-4 bg-card-bg p-4 rounded-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="md:w-40 md:h-40 w-full h-28">
          <img
            src={product.images[0]}
            alt=""
            className="rounded-lg shadow bg-white w-full h-full"
          />
        </div>
        <p className="flex flex-col ">
          <span className="font-semibold md:text-xl text-md">
            {product.title}
          </span>
          <span className="md:text-lg text-sm text-green-600 font-bold">
            ${product.price}
          </span>
        </p>
      </div>
      {isAdded ? (
        <button
          className="w-full  p-2 bg-red-700 text-white rounded-md mt-3"
          onClick={(e) => clickRemove(e, product.id)}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="w-full p-2 bg-black text-white rounded-md mt-3  hover:bg-zinc-800 transition-colors"
          onClick={(e) => clickAdd(e, product)}
        >
          add to Cart
        </button>
      )}
    </NavLink>
  );
};
