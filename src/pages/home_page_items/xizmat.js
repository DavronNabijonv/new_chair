import React from "react";
import "./xizmat.scss";
import "../../styles/style.css";
import { xizmat_db } from "../../db/xizmat_db";
import PopUp from "../../mainPartsOfPage/animations/popUp";

export default function Xizmat() {
  return (
    <div className="xizmat">
      <div className="opacity">
        <h1>Bizning xizmatlar</h1>
        <div className="xizmat_items_group">
          {xizmat_db.map((l) => (
            <PopUp key={l.nameServices} ownClassName={"x_card"}>
                <span className="x_icon">{l.icon}</span>
                <h3 className="x_head">{l.nameServices}</h3>
                <p className="x_txt">{l.textServices}</p>
            </PopUp>
          ))}
        </div>
      </div>
    </div>
  );
}
