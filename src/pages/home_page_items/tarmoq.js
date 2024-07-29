import React, { useContext } from "react";
import { InnerWidthContext } from "../../App";
import { FaTelegramPlane,FaInstagram,FaYoutube,FaFacebook  } from "react-icons/fa";
import './tarmoq.scss'

export default function Tarmoq() {
  const t_innerWidth = useContext(InnerWidthContext);
  return (
    <div className="tarmoq">
      <h1>Bizni ijtimoiy tarmoqlarda kuzating</h1>
      <div className="t_links">
        <button className="t_btn"><FaTelegramPlane />  {t_innerWidth>670&&'Telegram'}</button>
        <button className="t_btn"><FaInstagram />  {t_innerWidth>670&&'Instagram'}</button>
        <button className="t_btn"><FaYoutube />  {t_innerWidth>670&&'YouTobe'}</button>
        <button className="t_btn"><FaFacebook />  {t_innerWidth>670&&'Facebook'}</button>
      </div>
    </div>
  );
}
