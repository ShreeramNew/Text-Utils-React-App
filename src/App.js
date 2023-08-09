import React from "react";
import {
   Route,
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider
} from "react-router-dom";
import Nav from "./Navbar";
import MainNew from "./MainArea";
import AboutUs from "./aboutUs";
const router=createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<Nav/>}>
         <Route path="/" element={<MainNew/>}/>
         <Route path="/MainArea" element={<MainNew/>}/>
         <Route path="/aboutUs" element={<AboutUs/>}/>
      </Route>
   )
);
export default function App() {
   return (
      <RouterProvider router={router}/>
   );
}
