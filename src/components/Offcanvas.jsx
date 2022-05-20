import React, {useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import {OffcanvasData} from './OffcanvasData'
import './Offcanvas.css'
import '../App.css'

function Offcanvas() {
  const [sidebar, setSidebar] = useState(false)

  const onCanvas = () =>setSidebar(!sidebar)

  return (
    <div>
      <div className="navbar px-4 d-lg-none">
        <Link to="#" className="menu-bars">
          <MenuIcon className="d-lg-none text-white" onClick={onCanvas} />
        </Link>
        
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <CloseIcon onClick={onCanvas} className="close-canvas text-white"/>
            </Link>
          </li>
          {OffcanvasData.map((item, index)=>{
            return <li key={index} className={item.cName}>
              <Link to={item.path} onClick={onCanvas}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          })}
          <li className="navbar-toggle"></li>
        </ul>
      </nav>
    </div>
  );
}

export default Offcanvas;
