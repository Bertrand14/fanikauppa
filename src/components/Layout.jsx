import React from 'react';
import { Outlet, Link } from "react-router-dom";
import navParts from '../assets/data/navparts'
import HeaderPage from './Header'
import FooterPage from './Footer'

function Layout(){
 return (
  <>
   <HeaderPage />
   <nav>
    <ul>
     {navParts.map((infos, index) => (
      <Link key={index} to={infos.path}>
       <li >
         {infos.title}
       </li>
      </Link>
     ))}
    </ul>
   </nav>
   <main>
     <Outlet />
   </main>
   <FooterPage />
  </>
 )
}

export default Layout