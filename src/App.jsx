import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import navparts from './assets/data/navparts'


export default function App(){
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout />}>
    {navparts.map((nav) => (
     <Route key={nav.path} path={nav.path} element={nav.element} />
    ))}
    </Route>
   </Routes>
  </BrowserRouter>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
