import Home from './../../components/Home'
import Gallery from './../../components/Gallery'
import Products from './../../components/Products'
import Blog from './../../components/Blog'
import Community from './../../components/Community'
import Cart from './../../components/Cart'

const navParts = [
 { path: "/history", title: "Tarinamme", element: <Home /> },
 { path: "/gallery", title: "Galleria", element: <Gallery /> },
 { path: "/products", title: "Tuotteet", element: <Products /> },
 { path: "/blog", title: "Blogi", element: <Blog /> },
 { path: "/community", title: "Piaf yhteisö", element: <Community /> },
 { path: "/cart", title: "Ostokori", element: <Cart /> },
];


export default navParts