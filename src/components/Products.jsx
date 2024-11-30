import { useState } from 'react'
import allProducts from '../assets/data/productsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCartShopping, faSquareMinus, faSquarePlus } from '@fortawesome/free-solid-svg-icons'

export default function Products(){
 const [cart, setCart] = useState([])
 const totalCart = Math.round(cart.reduce((sum, product) => sum + product.sum, 0)*100)/100;
 const actionMessage = document.getElementById("actionMessage")
 console.log(cart)
 
 function UpdateCart(id, price, operate = "add"){
  const product = cart.find(product => product.id === id); // Search if product.id is present in the cart
  const CurrentProduct = allProducts.find(findProduct => findProduct.id === id);

  if (product) {  // If product id present, copy the content of line, update le value of qty (add 1)
    setCart(cart.map(product =>
      product.id === id ? { ...product, qty: (operate === "add") ? product.qty + 1 : Math.max(product.qty - 1, 0), sum: (operate === "add") ? (product.qty + 1)*price : Math.max(product.qty - 1, 0)* price} : product
    ));
    (operate === "add") ? ActionMessage(`1kl tuotteelle "${CurrentProduct.name}" on lisätty koriin.`) : ActionMessage(`Olemme poistaneet 1kl tuotteelta "${CurrentProduct.name}" ostoskoristasi.`)
  } else {  // If not present, add new product with the id and qty 1
    setCart([...cart, { id, qty: 1, sum: Math.round(price*100)/100}]);
    ActionMessage(`${CurrentProduct.name} on lisätty koriin.`)
  }
 }

 function ActionMessage(message, color = "green") {
  // var DisplayTime = (message.length)*50;

  // $('#message')
  //  .css( "background-color", color )
  //  .html(message)
  //  .slideToggle("slow")
  //  .delay(DisplayTime)
  //  .slideToggle("slow");
  actionMessage.textContent = message
 }

 function ToggleCartResume(){
   document.getElementById("resumeCart").style.display = (resumeCart.style.display === 'none') ? 'block' : 'none'
   document.getElementById("text").style.display = (resumeCart.style.display === 'none') ? 'block' : 'none'
   document.getElementById("totalSum").style.display = (resumeCart.style.display === 'none') ? 'block' : 'none'
 }

 return (
  <>
   <article id="productsThumbnails">
    {allProducts.map((product) => {
     return (
      <div key={product.id} id={product.id} className='productResume' >
       <div className='illustration'><img src={`/src/assets/images/products/${product.id}.jpeg`} alt={product.name} /></div>
        <div className='name'>{product.name}</div>
        {/* <span className='type'>{product.type}</span> */}
        <div className='star'><div className='price'>{product.price}€</div></div>
        <i onClick={() => UpdateCart(product.id, product.price, "add")} className='cartPlusButton'> <FontAwesomeIcon icon={ faCartPlus } /></i>
      </div>
     )
    })}
   </article>
   <div id="cart">
    <header onClick={ToggleCartResume}>
     <div id="showButton"><FontAwesomeIcon icon={ faCartShopping } /></div>
     <div id="actionMessage" value="Et ole vielä lisännyt tuotetta ostoskoriin">Et ole vielä lisännyt tuotetta ostoskoriin</div>
     <div id="text">Ostoskorin kokonaissumma : </div>
     <div id="totalSum">{totalCart} €</div>
     
    </header>
    <div id="resumeCart">
     <table>
      <thead>
       <tr>
         <th>Ref</th>
         <th>Nimike</th>
         <th>à Hinta</th>
         <th>Määrä</th>
         <th>Summa</th>
       </tr>
      </thead>
      <tbody>
      {cart.map((product, index) => {
       const productInfos = allProducts.find(findProduct => findProduct.id === product.id);
        return (
         <tr key={index}>
          <td>{productInfos.id}</td>
          <td>{productInfos.name}</td>
          <td>{productInfos.price}</td>
          <td>
           <i onClick={() => UpdateCart(product.id, product.price, 'less')} className='cartMinusButton'> <FontAwesomeIcon icon={ faSquareMinus } /></i>
           {product.qty}
           <i onClick={() => UpdateCart(product.id, product.price, "add")} className='cartPlusButton'> <FontAwesomeIcon icon={ faSquarePlus } /></i>
          </td>
          <td>{product.sum} €</td>
         </tr>
        )
       })
      }
      </tbody>
      <tfoot>
       <tr>
        <td>somme totale</td>
        <td>réducrion</td>
        <td>Montant à payer</td>
       </tr>
      </tfoot>
     </table>
     <form>
      <input type="text"></input>

     </form>
    </div>
   </div>
  </>
 )
}