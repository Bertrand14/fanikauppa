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
       <li key={index}>
        <Link to={infos.path}>{infos.title}</Link>
       </li>
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