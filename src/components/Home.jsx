import { useState } from 'react'
import presentation from './../assets/data/piafslife'

function Home(){

 function SubPart({subpart}){
  if(subpart.length === 1){return( <p>{subpart}</p>)}
  else{
   return subpart.map((part, index) => (
    <div key={index}>
    <h4 key={index}>{part.subtitle}</h4>
    {Object.entries(part.chapitres).map(([nro, chapitre]) => (
     <p key={nro}
     dangerouslySetInnerHTML={{ __html: chapitre }}>
    </p>
    ))}
    </div>
   ))
  }
 }

 return(
  <article id="presentation">
   {presentation.map((mainchapitre, index) => (
   <div key={index}>
    <h2>{mainchapitre.title}</h2> 
    <SubPart subpart={mainchapitre.chapitres} />
   </div>
  ))}
  </article>
 )
}

export default Home