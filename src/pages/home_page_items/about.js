import React, { useContext } from "react";
import "./about.scss";
import { InnerWidthContext } from "../../App";
import {
  Left_ani,
  Right_ani,
} from "../../mainPartsOfPage/animations/left_right";

export default function About() {
  const aboutInnerWidth = useContext(InnerWidthContext);

  return (
    <div className="about">
      <h1>Kampaniya haqida</h1>
      <Left_ani ownClassName={"a_group"}>
        <img
          src="https://m.media-amazon.com/images/I/71UimUDsl2L._AC_SL1000_.jpg"
          className="a_img"
          alt="about company"
        />
        <p className="a_txt">
          Mebel bu insonlar uchun oddiygina buyum sifatida qaralmasligi uchun
          biz unga har kun foydalanishdagi qulaylik , uy bilan uyg’unlashgan
          dizayn , sifatli materiallar , yuqori aniqlikda ishlaydigan zamonaviy
          texnologiyalar yordamida qilinadigan bir ijod maxsuli sifatida
          qaraymiz. Biz SerenMebel kompaniyasi bo'lib, mijozlarimizga eng so’ngi
          materiallar va texnikadan foydalangan holda oshxona, yotoqxona, shakf
          mebellari, bolalar mebellari, stol stul to’plamlari, ayvon va zal
          mabellar, ofis mebellari, yumshoq mebellar, polkalar va stellajlar
          tayyorlab berishdan tortib yetkazib hamda o’rnatish va texnik xizmat
          ko'rsatishgacha bo'lgan to'liq xizmatlarni taqdim etamiz.
        </p>
      </Left_ani>
      <Right_ani ownClassName={"a_group"}>
        {aboutInnerWidth > 970 && (
          <p className="a_txt">
            Mebel bu insonlar uchun oddiygina buyum sifatida qaralmasligi uchun
            biz unga har kun foydalanishdagi qulaylik , uy bilan uyg’unlashgan
            dizayn , sifatli materiallar , yuqori aniqlikda ishlaydigan
            zamonaviy texnologiyalar yordamida qilinadigan bir ijod maxsuli
            sifatida qaraymiz. Biz SerenMebel kompaniyasi bo'lib, mijozlarimizga
            eng so’ngi materiallar va texnikadan foydalangan holda oshxona,
            yotoqxona, shakf mebellari, bolalar mebellari, stol stul
            to’plamlari, ayvon va zal mabellar, ofis mebellari, yumshoq
            mebellar, polkalar va stellajlar tayyorlab berishdan tortib yetkazib
            hamda o’rnatish va texnik xizmat ko'rsatishgacha bo'lgan to'liq
            xizmatlarni taqdim etamiz.
          </p>
        )}
        <img
          src="https://i5.walmartimages.com/asr/374ebbd8-cd76-4294-8d58-6866e025b185.4c7f79ac7a3b287324b8b8377cfca5ea.png"
          className="a_img"
          alt="about company"
        />
        {aboutInnerWidth < 970 && (
          <p className="a_txt">
            Mebel bu insonlar uchun oddiygina buyum sifatida qaralmasligi uchun
            biz unga har kun foydalanishdagi qulaylik , uy bilan uyg’unlashgan
            dizayn , sifatli materiallar , yuqori aniqlikda ishlaydigan
            zamonaviy texnologiyalar yordamida qilinadigan bir ijod maxsuli
            sifatida qaraymiz. Biz SerenMebel kompaniyasi bo'lib, mijozlarimizga
            eng so’ngi materiallar va texnikadan foydalangan holda oshxona,
            yotoqxona, shakf mebellari, bolalar mebellari, stol stul
            to’plamlari, ayvon va zal mabellar, ofis mebellari, yumshoq
            mebellar, polkalar va stellajlar tayyorlab berishdan tortib yetkazib
            hamda o’rnatish va texnik xizmat ko'rsatishgacha bo'lgan to'liq
            xizmatlarni taqdim etamiz.
          </p>
        )}
      </Right_ani>
    </div>
  );
}
