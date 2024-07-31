import React, { useContext, useState } from "react";
import { ProductInfo } from "../../App";
import './product_info.scss';

export default function Product_info() {
  const { product } = useContext(ProductInfo);
  const imgs = product.imgs || [];
  const [setImg,setSetImg] = useState(product.img_url);
  return (
    <div className="p_info_page">

      <div className="rasm">
        <img src={setImg} alt="stol image" className="main_img" />
        <div className="img_btns">
          {imgs.map((r)=>(
            <img src={r} onClick={()=>{setSetImg(r)}} alt='imges' className="p_slide_img" />
          ))}
        </div>
      </div>

      <div className="p_infor"> 

            <div className="f_img">
              <img src={product.info_img}  alt='info_img' className="img_olchamlari" />
              <div className="olchamlar">
                <h3>O`lchamlar</h3>
                <div className="olchamlar_group">
                  <div className="olchamlar_div">
                    <p>Uzunlik</p>
                    <p>{product.uzunlik}</p>
                  </div>
                  x
                  <div className="olchamlar_div">
                    <p>Kenglik</p>
                    <p>{product.kenglik}</p>
                  </div>
                  x
                  <div className="olchamlar_div">
                    <p>Balandlik</p>
                    <p>{product.balandlik}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p_more_info">
              <p className="m_txts">Stol bo`yi: {product.stol_b}</p>
              <p className="m_txts">Material: {product.material}</p>
              <p className="m_txts">Og`irligi: {product.ogirlig}</p>
              <p className="m_txts">Ramka rangi: {product.ramka_rangi}</p>
              <p className="m_txts">Olinadigan qopqoq: {product.olinadigan_qopqoq}</p>
              <p className="m_txts">Opsiyasi: {product.opsiyasi}</p>
              <p className="m_txts">Asosiy rang: {product.asosiy_rang}</p>
              <p className="m_txts">Katlanishi: {product.katlanishi}</p>
              <p className="m_txts">Davlat: {product.country}</p>
            </div>

      </div>

    </div>
  );
}
