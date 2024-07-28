import React, { useState } from "react";
import "./aloqa.scss";
import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Aloqa() {
  const [tel, setTel] = useState();
  const [mes, setMes] = useState();

  const handleSubmit = (e) => {
    e.preventDefault(); //entir bosilganda sayit ereflish bulib ketmasilgi uchun

    const botToken = "5191102725:AAEzAHpvQUiJ_PM5p9Gw8IsnVfH9RclpGAM"; // bot tokini
    const chatId = 349142723; // botning adminini idisi
    // malumot yuborilish tartibi
    const messageText = `TelefonNomer:${tel} \nXabar:${mes}`;
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
        reset(); // Xabar yuborildi, reset ishlasin
      })
      .catch((error) => {
        console.error("Xabar yuborishda xatolik:", error);
      });
  };

  //xabar yuborilsa inputlarning valuesi '' teng bulib qoladi
  const reset = () => {
    setMes("");
    setTel("");
  };

  return (
    <div className="aloqa">
      <div className="a_grp1">
        <h2>Biz bilan aloqa</h2>
        <div className="change_info">
          <div className="get_input">
            <label>Telefon nomer:*</label>
            <input
              type="text"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              placeholder="Telofon raqam"
              required
            />
            <label>Xabarni yozing:*</label>
            <textarea
              value={mes}
              onChange={(e) => setMes(e.target.value)}
              placeholder="Xabarni yoing...."
            />
            <button className="a_btn" onClick={handleSubmit}>
              Xabarni jo`natish
              <FaArrowRightLong />
            </button>
          </div>
          <div className="our_contact_info">
            <p className="a_txt">
              <FaPhoneAlt /> +998 91 214 34 72
            </p>
            <p className="a_txt">
              <FaPhoneAlt /> +998 95 334 60 60
            </p>
            <p className="a_txt">
              <IoMdMail /> Sardorusmon111@gmail.com
            </p>
            <p className="a_txt">
              <FaLocationDot />
              Toshkent shahar Yashnabod tumani Olmos mahallasi Yakkatol 3-tor
              ko`chasi 38 uy
            </p>
          </div>
        </div>
      </div>
      <div className="a_grp2">
      <iframe
            width="100%"
            height="450"
            frameborder="0"
            src="https://www.google.com/maps/embed/v1/place?q=Manzilga+Toshkent+shahar+Yashnabod+tumani+Olmos+mahallasi+Yakkatol+3-tor+ko%E2%80%99chasi+38+uy&key=AIzaSyA-YgNEw2WDvbRixmD8lpNdwHo3qb-k-m0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
      </div>
    </div>
  );
}
