import React, { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";

import "./product.css";
import { products_slider } from "../../db/showCase_slider";
import { ProductInfo } from "../../App";
import PopUp from "../animations/popUp";

export default function Product() {
  const [groupNumbers, setGroupNumbers] = useState([]);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const {setProduct} = useContext(ProductInfo)

  const slider = (groupIndex) => {
    setSelectedGroupIndex(groupIndex);
  };

  useEffect(() => {
    const numbers = Array.from(
      { length: products_slider.length },
      (_, i) => i + 1
    );
    setGroupNumbers(numbers);
  }, []);

  return (
    <>
      {products_slider.map((productGroup, index) => (
        <div
          key={index}
          className={`groupOfProducts ${
            index === selectedGroupIndex ? "selected" : "hide"
          }`}
        >
          {productGroup.map((product) => (
            <PopUp keyName={product.name} ownClassName={'cards'}>
              <img
                src={product.img_url}
                className="products_img"
                alt="stul rasmlari"
              />
              <div className="infoPart">
                <div className="txt_grp">
                  <p className="name"> Mahsulot: {product.name}</p>
                  <mark className="narxi">Narxi: {product.narxi}</mark>
                </div>
                <Link to={`/product`}>
                  <button className="buyurtma_btn" onClick={()=>{setProduct(product)}}>Buyurtma berish</button>
                </Link>
              </div>
            </PopUp>
            // <div className={`animated-div cards `} key={product.name} >
              
            // </div>
          ))}
        </div>
      ))}
      <div className="productGroup">
        {groupNumbers.map((number) => (
          <p
            className={`slider_pagination 
                  ${number - 1 === selectedGroupIndex ? "active" : ""}`}
            onClick={() => {
              slider(number - 1);
            }}
            key={number}
          >
            {number}
          </p>
        ))}
      </div>
    </>
  );
}
