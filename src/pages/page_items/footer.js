import React from 'react'
import './footer.scss';
import { FaTelegramPlane,FaInstagram,FaYoutube,FaFacebook  } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='f_container'>
        <div className='f_logoPart'>
            <h2>Seren Mebel</h2>
            <p className="f_txt">Siz izlayotgan barcha turdagi va sizning didingizdagi mebellar do`koni</p>
            <p className='f_txt'>© SerenMebel tashkiloti serenmebel.uz</p>
            <div className="f_contact">
            <button className="f_btn"><FaTelegramPlane /> </button>
            <button className="f_btn"><FaInstagram /></button>
            <button className="f_btn"><FaYoutube /></button>
            <button className="f_btn"><FaFacebook /> </button>
            </div>
        </div>
        <div className='f_pageLinks'>
            <div className="f_links_page">
                <p className="f_links">Biz haqimizda</p>
                <p className="f_links">Mahsulotlar</p>
                <p className="f_links">Xizmatlar</p>
                <p className="f_links">Aloqa</p>
            </div>
            <div className="f_links_hamkorlar">
                <h3>Hamkor do`konlar</h3>
                <a href='https://serenmebel.uz/'>SerenMebel.uz</a>
                <h3 className='dastur'>Dasturiy hamkor</h3>
                <a href='https://t.me/chtn_for_all'>Frontend developer</a>
            </div>
        </div>
      </div>
    </div>
  )
}
