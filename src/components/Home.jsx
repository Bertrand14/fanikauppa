import { useState } from 'react'
import presentation from './../assets/data/piafslife'

function Home(){

 function SubPart({subpart}){
  if(subpart.length === 1){return( <p>{subpart}</p>)}
  else{
   return subpart.map((part, index) => (
    <>
    <h4 key={index}>{part.subtitle}</h4>
    {part.chapitres}
    </>
   ))
   
  }
  
  // let chapitres = Object.entries(mainchapitre.chapitres).map(([subtitle, chapitres], index) => {
  //  console.log()
  //  return <h3 key={index}>{subtitle}</h3>
  // })
 }

 let allChapitres = presentation.map((mainchapitre, index) => {
  console.log(mainchapitre.chapitres)
  return (
   <div key={index}>
    <h2>{mainchapitre.title}</h2> 
    <SubPart subpart={mainchapitre.chapitres} />
   </div>
  )
 })

 return(
  <article id="presentation">
   {allChapitres}
  </article>
 )
}

export default Home