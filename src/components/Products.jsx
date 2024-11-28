import { useState } from 'react'
import allProducts from '../assets/data/productsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default function Products(){
 const [cart, setCart] = useState([])
 console.log(cart)
 
 function AddToCart(id){
  let already = setCart(cart.map(product => {
   if(id === product.id){
    cart = {...cart, qty: product.qty + 1}
   }
  }))
  if(already === undefined) {
   setCart(cart.concat({
     id: id,
     qty: 1
   }))
   }
   return cart
  console.log(already)
 }

 const productsThumbnails = allProducts.map((product, index) => {
  return (
   <div id={product.id} className='productResume' >
    <div className='illustration'><img src={`/src/assets/images/products/${product.id}.jpeg`} alt={product.name} /></div>
    <h3>{product.name}</h3>
    <span className='type'>{product.type}</span>
    <div className='star'><div className='price'>{product.price}€</div></div>
    <i onClick={() => AddToCart(product.id)} > <FontAwesomeIcon icon={ faCartPlus } /></i>
   </div>
  )
 })
 return (
  <article id="productsThumbnails">
   {productsThumbnails}
  </article>
 )
}