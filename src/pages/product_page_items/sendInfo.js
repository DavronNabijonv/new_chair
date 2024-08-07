import React from "react";
import "./sendInfo.scss";

export default function SendInfo() {
  return (
    <div className="send_info">
      <div className="s_header">
        <h2>Ma'lumotlar:</h2>
        <button>Buyurtma berish</button>
      </div>
      <div className="get_info">
        <div className="user_info">
            <label>Ism Familya:</label>
          <input type="text" placeholder="Ismingiz" required />
          <label>Telefon raqam:</label>
          <input type="text" placeholder="Telefon raqam" required />
          <label>Buyurtmachi manzili:</label>
          <input type="text" placeholder="Manzil" required />
          <textarea placeholder="Qo`shimcha takliflar!!!" />
        </div>
        <div className="user_info">
          <input type="text" placeholder="Mahsulot nomi" />
          <input type="text" placeholder="Narxi" disabled />
          <input type="text" placeholder="Soni"  />
        </div>
      </div>
    </div>
  );
}
