import React, { useContext } from "react";
import "./productPage.css";
import Product_info from "./product_page_items/product_info";
import Product_bottom from "./product_page_items/product_bottom";

export default function ProductPage() {
  return (
    <>
      <div className="product_page">
        <div className="p_container">
          <Product_info />
        </div>
      </div>
      <Product_bottom />
    </>
  );
}
