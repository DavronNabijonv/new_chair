import React from 'react';
import './xizmat.scss';
import { xizmat_db } from '../../db/xizmat_db';


export default function Xizmat() {
  return (
    <div className='xizmat'>
        <div className="opacity">
          <h1>Bizning xizmatlar</h1>
          <div className='xizmat_items_group'>
            {xizmat_db.map((l)=>(
              <div className="x_card" key={l.nameServices}>
                <span className='x_icon'>{l.icon}</span>
                <h3 className="x_head">{l.nameServices}</h3>
                <p className="x_txt">{l.textServices}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
