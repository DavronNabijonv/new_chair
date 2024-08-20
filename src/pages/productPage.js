import React, { useContext, useEffect } from "react";
import "./productPage.css";
import Product_info from "./product_page_items/product_info";
import Product_bottom from "./product_page_items/product_bottom";
import SendInfo from "./product_page_items/sendInfo";

export default function ProductPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="productHome">
      <div className="product_page">
        <div className="p_container">
          <Product_info />
        </div>
      </div>
      <SendInfo/>
      <Product_bottom />
    </div>
  );
}
