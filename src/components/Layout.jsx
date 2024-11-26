import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import navparts from '../assets/data/navparts'
import HeaderPage from './Header';

function Layout(){
 let allParts = navparts.map((infos, index) => {
  return (
   <li key={index} ><Link to={infos.path}>{infos.title}</Link></li>
  )
 })
 return (
  <>
   <HeaderPage />
   <nav>
    <ul>
     {allParts}
    </ul>
   </nav>
   <Outlet />
  </>
 )
}

export default Layout