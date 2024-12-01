import { useState } from 'react'
import allProducts from '../assets/data/productsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCartShopping, faTrashCan, faSquareMinus, faSquarePlus } from '@fortawesome/free-solid-svg-icons'

export default function Products(){
 const [cart, setCart] = useState([])
 const [reduction, setReduction] = useState(0)
 const [actionMessage, setMessage] = useState("Et ole vielä lisännyt tuotetta ostoskoriin")
 const totalCart = cart.reduce((sum, product) => sum + product.sum, 0);
 const currency = "€"

 function MonetaryNumber(number, symbol = false){
  return (symbol) ? `${(Math.round(number*100)/100).toFixed(2)} ${currency}` : Math.round(number*100)/100
 }

 function UpdateCart(id, price, operate = "add"){
  const product = cart.find(product => product.id === id); // Search if product.id is present in the cart
  const CurrentProduct = allProducts.find(findProduct => findProduct.id === id);
  if (typeof price !== "number") Number(price)
  if (product) { // If product id present in the cart
   if (operate === "less" && product.qty === 1) { // If less product and the current qty is 1, delet the product from the cart
    setCart(cart.filter((product) => product.id !== id));
    setMessage(`"${CurrentProduct.name}" on poistettu ostoskoristasi.`);
   }
   else { // copy the content of line, update le value of qty (add 1 or less 1)
    setCart(cart.map(product =>
     product.id === id
      ? { ...product,
        qty: (operate === "add") ? product.qty + 1 : Math.max(product.qty - 1, 0), 
        sum: (operate === "add") ? MonetaryNumber((product.qty + 1)*price) : MonetaryNumber(Math.max(product.qty - 1, 0)* price) }
      : product
    ));
    (operate === "add") 
     ? setMessage(`1kl tuotteelle "${CurrentProduct.name}" on lisätty koriin.`) 
     : setMessage(`Olemme poistaneet 1kl tuotteelta "${CurrentProduct.name}" ostoskoristasi.`)
   }
  }
  else {  // If not present, add new product with the id and qty 1
     setCart([...cart, { id, qty: 1, sum: MonetaryNumber(price)}]);
     setMessage(`${CurrentProduct.name} on lisätty koriin.`)
   }
  }

 function ReductionCalcul(){
  const totalCart = cart.reduce((sum, product) => sum + product.sum, 0)
  if(totalCart < 100) {setReduction(0)}
  else if(100 <= totalCart && totalCart < 250){ setReduction(totalCart*0.025) }
  else if(250 <= totalCart && totalCart < 500){ setReduction(totalCart*0.040) }
  else{setReduction(totalCart*0.1)}
  console.log(typeof reduction, reduction)
  return MonetaryNumber(reduction, true);
 }

 function ResetCart(){
  setCart([])
  setMessage(`Ostokorisi on nyt tyhjä`)
 }

 function GuestForm(){
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [ZIP, setCodeZip] = useState("")
  const [city, setCity] = useState("")

  function SendOrder(e){
   e.PreventDefault()
   //Calling Back-end to send the order
    // ????

   // 
   ResetCart();
   const guestForm = document.getElementById('sendOrder')
   guestForm.reset();
  }

  return (
   <form onSubmit={(e) => SendOrder(e)} id="sendOrder">
    <h4>Tilauksen vahvistaminen</h4>
    <div><input type="text" id="name" name="name" onChange={(e) => setName(e.event.value)} pattern="[A-Za-z]{3,}\s[A-Za-z]{3,}" title="Etunimi Sukunimi" placehodler=" " required /><label htmlFor="name">Nimesi</label></div>
    <div><input type="email" id="mail" name="mail" onChange={(e) => setMail(e.event.value)} pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" title="jotain@jotainmuu.maa" placehodler=" "  required /><label htmlFor="email">Sähköpostisi</label></div>
    <div><input type="phone" id="phonenumber" name="phonenumber" onChange={(e) => setPhone(e.event.value)} pattern="+[0-9]{12}" title="" placehodler=" " required /><label htmlFor="phonenumber">Puhelinnumero</label></div>
    <fieldset>
      <legend>Toimitusosoite</legend>
      <div><input type="text" id="address" name="address" onChange={(e) => setAddress(e.event.value)}></input><label htmlFor="address">Katuosoite</label></div>
      <div><input type="text" id="ZIP" name="ZIP" onChange={(e) => setCodeZip(e.event.value)} pattern='[0-9]{5}' min="5" max="5"></input><label htmlFor="ZIP">Postinumero</label></div>
      <div><input type="text" id="city" name="city" onChange={(e) => setCity(e.event.value)} ></input><label htmlFor="city">Postitoimipaikka</label></div>
     </fieldset>
    <button id="message" name="Subject">Lähetä</button>
   </form>
  )
 }


 function ToggleCartResume(){

  if(document.getElementById("resumeCart").style.display == "none"){
   document.getElementById("resumeCart").style.display = 'block' 
   document.getElementById("sendOrder").style.display = 'block'
   document.getElementById("text").style.display = 'none'
   document.getElementById("totalSum").style.display = 'none'
  }
  else{
   document.getElementById("resumeCart").style.display = 'none'
   document.getElementById("sendOrder").style.display = 'none'
   document.getElementById("text").style.display = 'block'
   document.getElementById("totalSum").style.display = 'block'
  }
   
   
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
        <div className='star'><div className='price'>{MonetaryNumber(product.price, true)}</div></div>
        <i onClick={() => UpdateCart(product.id, product.price, "add")} className='cartButton Plus'> <FontAwesomeIcon icon={ faCartPlus } /></i>
      </div>
     )
    })}
   </article>
   <div id="cart">
    <header onClick={ToggleCartResume}>
    <div id="showButton"><i><FontAwesomeIcon icon={ faCartShopping } /></i></div>
     <div id="actionMessage">{actionMessage}</div>
     <div id="text">Ostoskorin kokonaissumma : </div>
     <div id="totalSum">{MonetaryNumber(totalCart, true)}</div>
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
          <td className='productID'>{productInfos.id}</td>
          <td className='productName'>{productInfos.name}</td>
          <td className='productPrice'>{MonetaryNumber(productInfos.price, true)}</td>
          <td className='productQty'>
           <i onClick={() => UpdateCart(productInfos.id, productInfos.price, "less")} className='cartButton Minus'><FontAwesomeIcon icon={ faSquareMinus } /></i>
           <span>{product.qty}</span>
           <i onClick={() => UpdateCart(productInfos.id, productInfos.price, "add")} className='cartButton Plus'><FontAwesomeIcon icon={ faSquarePlus } /></i>
          </td>
          <td className='productAmount'>{MonetaryNumber(product.sum, true)}</td>
         </tr>
        )
       })
      }
      </tbody>
      <tfoot>
       <tr>
        <th colSpan="4" scope="row">Somme</th>
        <td>{MonetaryNumber(totalCart, true)}</td>
       </tr>
       <tr>
        <th colSpan="4" scope="row">Reduction</th>
        <td>{<ReductionCalcul />}</td>
       </tr>
       <tr>
        <th colSpan="4" scope="row">Montant à payer</th>
        <td id="amountDue">{MonetaryNumber(totalCart-reduction, true)}</td>
       </tr>
       <tr colSpan="5" scope="row">
        <td id="emptyCartButton" onClick={() => ResetCart()}><i><FontAwesomeIcon icon={ faTrashCan } /></i> Tyhjä ostokori</td>
       </tr>
      </tfoot>
     </table>
    </div>
    <GuestForm />
   </div>
  </>
 )
}