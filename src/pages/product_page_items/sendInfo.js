import React, { useContext, useEffect, useState } from "react";
import "./sendInfo.scss";
import { ProductInfo } from "../../App";

export default function SendInfo() {
  const {product} = useContext(ProductInfo)
  const [sendInfoVariables, setSendInfoVariables] = useState({
    name: "",
    tel: "",
    manzil: "",
    takilflar: "",
    mahsulot_nomi: product.name,
    mahsulot_narxi: product.narxi || '0',
    soni: Number ,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSendInfoVariables((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSoniChange = (e) => {
    e.preventDefault();
    const newSoni = parseFloat(e.target.value) || Number;
    console.log()
    setSendInfoVariables((prevState) => ({
      ...prevState,
      soni: newSoni,
    }));
    const out_time = setTimeout(() => {
      setSendInfoVariables((prevState) => ({
        ...prevState,
        mahsulot_narxi: newSoni * product.narxi || product.narxi,
      }));
    }, 3000);
    return ()=>{clearTimeout(out_time)}
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //entir bosilganda sayit ereflish bulib ketmasilgi uchun

    const botToken = "5191102725:AAEzAHpvQUiJ_PM5p9Gw8IsnVfH9RclpGAM"; // bot tokini
    const chatId = 349142723; // botning adminini idisi
    // malumot yuborilish tartibi
    const messageText = `
      Ism:${sendInfoVariables.name} 
      \nTelefonNomer:${sendInfoVariables.tel} 
      \nManzil:${sendInfoVariables.manzil}
      \nTaklif:${sendInfoVariables.takilflar}
      \Mahsulot Nomi:${sendInfoVariables.mah_nomi}
      \Mahsulot narxi:${sendInfoVariables.narxi}
      \Soni:${sendInfoVariables.soni}
      `;
    // post qilib yuborish
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
      }),
    };

    // fetch orqali botga  xabar yuborish
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Xabar yuborishda xatolik");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Xabar yuborildi:", data);
        sendInfoReset(); // Xabar yuborildi, reset ishlasin
      })
      .catch((error) => {
        console.error("Xabar yuborishda xatolik:", error);
      });
  };

  const sendInfoReset = () => {
    setSendInfoVariables({
      name: "",
      tel: "",
      manzil: "",
      takilflar: "",
      mahsulot_nomi: product.name,
      narxi:product.narxi,
      soni: Number,
    });
  };
  return (
    <div className="send_info">
      <div className="s_header">
        <h2>Buyurtma berish uchun ariza qoldiring:</h2>
        <button className="sendInfo_btn" onClick={handleSubmit}>Buyurtma berish</button>
      </div>
      <div className="get_info">
        <div className="user_info">
          <label>Ism Familya:</label>
          <input
            type="text"
            name="name"
            value={sendInfoVariables.name}
            placeholder="Ismingiz"
            onChange={handleInputChange}
            required
          />
          <label>Telefon raqam:</label>
          <input
            type="text"
            name="tel"
            value={sendInfoVariables.tel}
            placeholder="Telefon raqam"
            onChange={handleInputChange}
            required
          />
          <label>Buyurtmachi manzili:</label>
          <input
            type="text"
            name="manzil"
            value={sendInfoVariables.manzil}
            placeholder="Manzil"
            onChange={handleInputChange}
            required
          />
          <label>Qo`shimcha takliflar</label>
          <textarea
            name="takliflar"
            placeholder="Qo`shimcha takliflar!!!"
            value={sendInfoVariables.takilflar}
            onChange={handleInputChange}
          />
        </div>
        <div className="user_info">
          <label>Mahsulot nomi:</label>
          <input
            type="text"
            value={sendInfoVariables.mahsulot_nomi}
            placeholder="Mahsulot nomi"
            disabled
          />
          <label>Narxi:</label>
          <input
            type="text"
            value={`${sendInfoVariables.mahsulot_narxi} so'm`}
            placeholder="Narxi"
            disabled
          />
          <label htmlFor="">Soni:</label>
          <input
            type="text"
            name="soni"
            value={sendInfoVariables.soni}
            onChange={handleSoniChange}
            placeholder="Soni"
          />
        </div>
      </div>
    </div>
  );
}
