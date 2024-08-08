import React from "react";
import "./sendInfo.scss";

export default function SendInfo() {
  return (
    <div className="send_info">
      <div className="s_header">
        <h2>Ma'lumotlar:</h2>
        <button className="sendInfo_btn">Buyurtma berish</button>
      </div>
      <div className="get_info">
        <div className="user_info">
          <label>Ism Familya:</label>
          <input type="text" placeholder="Ismingiz" required />
          <label>Telefon raqam:</label>
          <input type="text" placeholder="Telefon raqam" required />
          <label>Buyurtmachi manzili:</label>
          <input type="text" placeholder="Manzil" required />
          <label>Qo`shimcha takliflar</label>
          <textarea placeholder="Qo`shimcha takliflar!!!" />
        </div>
        <div className="user_info">
          <label>Mahsulot nomi:</label>
          <input type="text" placeholder="Mahsulot nomi" />
          <label >Narxi:</label>
          <input type="text" value={'1 200 000'} placeholder="Narxi" disabled />
          <label htmlFor="">Soni:</label>
          <input type="text" placeholder="Soni"  />
        </div>
      </div>
    </div>
  );
}
