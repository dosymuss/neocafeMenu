import { useLocation, useNavigate } from "react-router-dom";

import navbarRing from "../../img/navBar/navbarRing.svg";
import navBarOrder from "../../img/navBar/navOrder.svg";
import navMenu from "../../img/navBar/navMenu.svg"
import navProfile from "../../img/navBar/navProfile.svg"
import navOrderActive from "../../img/navBar/navOrderActive.svg"
import navMenuActive from "../../img/navBar/navMenuActive.svg"
import navProfActive from "../../img/navBar/navProfileActive.svg"

import styles from "./NavBar.module.scss";

const NavBar = () => {
    const {pathname}  = useLocation()
    console.log(pathname)
    const navigate = useNavigate()

    const redirectFunc = (p)=>{
        navigate(p)
    }
    
  return (
    <div className={styles.main}>
      <button className={styles.btnRing}>
        <img src={navbarRing} alt="ring" />
      </button>
      <div className={styles.navBarDiv}>
        <button onClick={()=>redirectFunc("/")} className={pathname === "/" ?styles.linkBtnActive:styles.linkBtn}>
            <img src={pathname === "/"? navOrderActive :navBarOrder} alt="" />
            <p>Заказы</p>
        </button>
        <button onClick={()=>redirectFunc("/menu")} className={pathname === "/menu" ?styles.linkBtnActive:styles.linkBtn}>
            <img src={pathname === "/menu"?navMenuActive:navMenu} alt="" />
            <p>Меню</p>
        </button>
        <button onClick={()=>redirectFunc("/prof")} className={pathname === "/prof" ?styles.linkBtnActive:styles.linkBtn}>
            <img src={pathname === "/prof" ? navProfActive :navProfile} alt="" />
            <p>Профиль</p>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
