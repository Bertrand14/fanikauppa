import { useState } from 'react'
import allProducts from './../assets/data/products'

export default function Products(){
 const productsThumbnails = allProducts.map((product, index) => {
  return (
   <div id={product.id} className='productResume' >
    <div className='illustration'><img src={`/src/assets/images/products/${product.id}.jpeg`} alt={product.name} /></div>
    <h3>{product.name}</h3>
    <p></p>
   </div>
  )
 })
 return (
  <article id="productsThumbnails">
   {productsThumbnails}
  </article>
 )
}