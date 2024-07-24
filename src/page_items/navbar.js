import React, { useCallback, useEffect, useState } from "react";
import "./navbar.scss";
import { MdHome } from "react-icons/md";
import { RiUser3Fill } from "react-icons/ri";
import { HiMiniRectangleGroup, HiViewColumns } from "react-icons/hi2";
import { MdOutlineMessage,MdOutlineManageSearch,MdOutlineStorefront } from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { SlHome } from "react-icons/sl";

function Navbar() {
  const [innerWidthNavbar, setInnerWidthNavbar] = useState(window.innerWidth);
  const [scrollDownf, setScrollDownf] = useState(false);

  const handleResize = useCallback(() => {
    setInnerWidthNavbar(window.innerWidth);
  },[innerWidthNavbar]);

  const handleDown = useCallback(() => {
    if (window.scrollY === 0) {
      setScrollDownf(false);
    } else {
      setScrollDownf(true);
    }
  },[scrollDownf]);
  useEffect(() => {
    
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleDown);

    return () => {
      window.removeEventListener("resize", handleResize);
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
          <p> Biz haqimizda <hr /> </p>
          <p> Mahsulotlar <hr /> </p>
          <p> Xizmatlar <hr /> </p>
        </div>

        <div className="language_login">
          <button className="  btn-3">Aloqa</button>
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
          <button className="mobile_aloqa">Aloqa</button>
        </div>

      </div>

      

          <div className={toggle?"item_links":"close_item"}>
            <p> Biz haqimizda  </p>
            <p> Mahsulotlar </p>
            <p> Xizmatlar </p>
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
          <MdHome /> <p className="asosiy">Asosiy sahifa</p>
        </li>
        <li>
          <RiUser3Fill /> <p className="biz">Biz haqimizda</p>
        </li>
        <li>
          <HiViewColumns /> <p className="mah">Mahsulotlar</p>
        </li>
        <li>
          <HiMiniRectangleGroup /> <p className="xizmat">Xizmatlar</p>
        </li>
        <li>
          <MdOutlineMessage /> <p className="aloqa"> Aloqa </p>
        </li>
      </ol>
    </div>
  );
}
