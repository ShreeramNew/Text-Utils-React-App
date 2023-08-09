import PropType from "prop-types";
import {NavLink, Outlet } from "react-router-dom";
import "./Nav.css";

export default function Navbar(props) {
   return (
      <>
         <div className="nav-container">
            <h1>
               {props.title},{props.data}
            </h1>
            <nav className="Nav-bar">
               <NavLink to="/MainArea" className="nav-links">
                  Home
               </NavLink>
               <br />
               <NavLink to="/aboutUs" className="nav-links">
                  About Us
               </NavLink>
            </nav>
         </div>
         <div>
            <Outlet />
         </div>
      </>
   );
}

Navbar.propTypes = {
   title: PropType.string.isRequired,
};
Navbar.defaultProps = {
   title: "Jai Shreeram Jai Hanuman",
};
