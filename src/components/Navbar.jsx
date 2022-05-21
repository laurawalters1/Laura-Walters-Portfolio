import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { OffcanvasData } from './OffcanvasData'
import '../App.css'
import Offcanvas from './Offcanvas'
import pic from '../logo.png'

function Navbar() {
  return (
    // <div class="aside d-none m-0 d-lg-flex">
 
    <div className="navbar  p-3">
      <Offcanvas className="d-flex  d-lg-none"/>
      <img src={pic} className="logo" alt=''/>
        <div className='nav d-none  d-lg-flex'>
    {OffcanvasData.map((item, index)=>{
            return <li key={index} className={item.cName}>
              <Link to={item.path} className="nav-item m-5" >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          })}
          </div>
          
    </div>

   

  )
}

export default Navbar