import React from "react";
import "./CustomAlertStyle.css";

export default function Alert(props) {
   return (
      props.show && (
         <>
            <div>
               <div className="alert-container">
                  <h3 id="alert-msg">{props.msg}</h3>
                  <button className="close-btn" onClick={props.onClose}>
                     Close
                  </button>
               </div>
            </div>
         </>
      )
   );
}
