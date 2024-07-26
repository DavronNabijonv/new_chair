import React, { useEffect, useState } from "react";

import "./product.css";
import { products_slider } from "../../db/showCase_slider";

export default function Product() {
  const [groupNumbers, setGroupNumbers] = useState([]);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);

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
          className={`groupOfProducts ${index === selectedGroupIndex ? 'selected' : 'hide'}`}
        >
          {productGroup.map((product) => (
            <div className="cards" key={product.name}>
              <img src={product.img_url} className="products_img" alt="stul rasmlari" />
              <div className="infoPart">
                <p className="name"> Mahsulot: {product.name}</p>
                <mark className="narxi">Narxi: {product.narxi}</mark>
                <button>Buyurtma berish</button>
              </div>
            </div>
          ))}
        </div>
      ))}
      <div className="productGroup">
        {groupNumbers.map((number) => (
          <p 
          className=
            {`slider_pagination 
                  ${number - 1 === selectedGroupIndex ? 'active' : ''}`}
            onClick={()=>{slider(number-1)}}
            key={number} >
            {number}
          </p>
        ))}
      </div>
    </>
  );
}
