import React, { useCallback, useContext, useEffect, useState } from "react";
import "./navbar.scss";
import {Link} from 'react-scroll';
import { MdHome } from "react-icons/md";
import { RiUser3Fill } from "react-icons/ri";
import { HiMiniRectangleGroup, HiViewColumns } from "react-icons/hi2";
import { MdOutlineMessage,MdOutlineManageSearch,MdOutlineStorefront } from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { SlHome } from "react-icons/sl";
import { InnerWidthContext } from "../../App";

function Navbar() {
  const innerWidthNavbar = useContext(InnerWidthContext);
  const [scrollDownf, setScrollDownf] = useState(false);


  const handleDown = useCallback(() => {
    if (window.scrollY === 0) {
      setScrollDownf(false);
    } else {
      setScrollDownf(true);
    }
  },[scrollDownf]);
  useEffect(() => {
    
    window.addEventListener("scroll", handleDown);

    return () => {
      window.removeEventListener('scroll', handleDown);
    };
  }, []);



  return (
    <>
      {innerWidthNavbar > 670 ? <Desktop /> : <Mobile/>}
      <div className={scrollDownf? "hover":"display"}><ScrollNav /></div>
    </>
  );
}

export default Navbar;

function Desktop() {
  return (
    <div className="navbar">

      <div className="nav">

        <div className="logo">Seren Mebel</div>

        <div className="links">
          <Link activeClass="active" 
            to="haqida" 
            spy={true} 
            smooth={true} 
            offset={-50} 
            duration={800} 
          > Biz haqimizda <hr /> </Link>
          <Link
            activeClass="active" 
            to="mahsulot" 
            spy={true} 
            smooth={true} 
            offset={-50} 
            duration={800} 
          > Mahsulotlar <hr /> </Link>
          <Link
            activeClass="active" 
            to="k_xizmat" 
            spy={true} 
            smooth={true} 
            offset={-50} 
            duration={800} 
          > Xizmatlar <hr /> </Link>
        </div>

        <div className="language_login">
          <Link 
            activeClass="active" 
            to="k_aloqa" 
            spy={true} 
            smooth={true} 
            offset={-50} 
            duration={800} 
          >
            <button className="  btn-3">Aloqa</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

function Mobile (){
  const [toggle,setToggle] = useState(false);
  return(
    <>
      <div className="mobile">

        <div className="logo">Seren Mebel</div>

        <div className="btn_grp">
          <button className="mobile_toggle_btn" onClick={()=>{setToggle(!toggle)}}><HiOutlineMenuAlt1 /></button>
          <Link 
            activeClass="active" 
            to="k_aloqa" 
            spy={true} 
            smooth={true} 
            offset={-50} 
            duration={800} 
          >
            <button className="mobile_aloqa">Aloqa</button>
          </Link>
          
        </div>

      </div>

      

          <div className={toggle?"item_links":"close_item"}>
          <Link activeClass="active" 
            to="haqida" 
            spy={true} 
            smooth={true} 
            offset={-50} 
            duration={800} 
          > Biz haqimizda </Link>
          <Link
            activeClass="active" 
            to="mahsulot" 
            spy={true} 
            smooth={true} 
            offset={-50} 
            duration={800} 
          > Mahsulotlar </Link>
          <Link
            activeClass="active" 
            to="k_xizmat" 
            spy={true} 
            smooth={true} 
            offset={-50} 
            duration={800} 
          > Xizmatlar </Link>
          </div>

         <div className={toggle?"overlay":"close_overlay"} onClick={()=>{setToggle(false)}}></div>
        
      <div className="bottom_bar">
        <div className="bar_grp">
          <SlHome />
          <p>Asosiy</p>
        </div>
        <div className="bar_grp">
        <MdOutlineManageSearch />
          <p>Katalog</p>
        </div>
        <div className="bar_grp">
        <MdOutlineStorefront />
          <p>Shourum</p>
        </div>
      </div>
    </>
  )
}

// bu component qachinki sahifa scroll bo`gandagina ko`rinadi
function ScrollNav() {
  return (
    <div className="scroll">
      {/* <div className="scroll_logo">Seren Mebel</div> */}
      <ol>
        <li>
          <MdHome /> <p className="s_asosiy">Asosiy sahifa</p>
        </li>
        <li>
          <RiUser3Fill /> <p className="s_biz">Biz haqimizda</p>
        </li>
        <li>
          <HiViewColumns /> <p className="s_mah">Mahsulotlar</p>
        </li>
        <li>
          <HiMiniRectangleGroup /> <p className="s_xizmat">Xizmatlar</p>
        </li>
        <li>
          <MdOutlineMessage /> <p className="s_aloqa"> Aloqa </p>
        </li>
      </ol>
    </div>
  );
}
