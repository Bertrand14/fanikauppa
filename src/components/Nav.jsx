import { useState } from 'react'
import navparts from './../assets/data/navparts'

function Nav(){
 let allParts = navparts.map((infos, index) => {
  return (
   <li key={index} >{infos.title}</li>
  )
 })
 return (
  <nav>
   <ul>
    {allParts}
   </ul>
  </nav>
 )
}

export default Nav