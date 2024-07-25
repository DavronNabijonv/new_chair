import React, { useCallback, useEffect, useState, useRef } from "react";

import "./product.css";
import { products_slider } from "../../db/showCase_slider";

export default function Product() {
  const [groupNumbers, setGroupNumbers] = useState([]);

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
          style={{ width: "1200px" }}
          className={`${index}group groupOfProducts`}
        >
          {productGroup.map((product) => (
            <div className="cards" key={product.name}>
              <img src={product.img_url} alt="stul rasmlari" />
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
          <p className="groupNumber" key={number} >
            {number}
          </p>
        ))}
      </div>
    </>
  );
}
