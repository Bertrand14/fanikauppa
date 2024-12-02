import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './components/Layout'
import navParts from './assets/data/navparts'

export default function App(){
 return (
  <BrowserRouter basename='/fanikauppa'>
   <Routes>
    <Route path="/" element={<Layout />}>
    <Route path="/" element={<Navigate to="/history" />} />
    {navParts.map((nav) => (
     <Route key={nav.path} path={nav.path} element={nav.element} />
    ))}
    </Route>
   </Routes>
  </BrowserRouter>
);
}