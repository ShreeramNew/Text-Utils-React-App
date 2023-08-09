import React from "react";
import "./Main.css";
import { useState } from "react";
import CustAlert from "./Alert/CustomAlert.js";

export default function MainArea() {
   //variable eclarations
   const [text, setText] = useState("");
   const [mode, setMode] = useState({
      backgroundColor: "white",
      color: "black",
   });
   const [btnState, setBtnState] = useState("Dark Mode");
   const [noOfWords, setNoOfWords] = useState(0);
   const [showAlert, setshowAlert] = useState(false);

   //Function declaration

   let checkValue = (event) => {
      //On Change
      setText(event.target.value);
      setNoOfWords(text.split(" ").length);
   };

   function Upper() {
      // Convert to upper case
      setText(text.toUpperCase());
   }

   function Lower() {
      //Convert to lower case

      setText(text.toLowerCase());
   }
   function firstUpper() {
      //Convert first letter to Upper case
      setText(text.replace(text.charAt(0), text.charAt(0).toUpperCase()));
   }
   function switchMode() {
      //Handles Dark mode
      if (btnState === "Dark Mode") {
         setMode({
            backgroundColor: "black",
            color: "white",
         });
         setBtnState("Light Mode");
      } else {
         console.log("I am dark");
         setMode({
            backgroundColor: "white",
            color: "black",
         });
         setBtnState("Dark Mode");
      }
   }

   function clearText() {
      //Clears Text
      setNoOfWords(0);
      setText("");
   }
   function handleClose() {
      //Handles close button clicked on alert element
      setshowAlert(false);
   }

   //Final component to return
   return (
      <>
         <div className="container">
            <CustAlert msg="Opening" show={showAlert} onClose={handleClose} />
            <button className="dark-mode" onClick={switchMode}>
               {btnState}
            </button>
            <textarea
               value={text}
               onChange={checkValue}
               className="user-input"
               style={mode}
               placeholder="ENTER YOUR TEXT HERE"
            ></textarea>
            <br />
            <div className="btn-container">
               <button className="submit-upper" onClick={Upper}>
                  UPPER CASE
               </button>
               <button className="submit-lower" onClick={Lower}>
                  LOWER CASE
               </button>
               <button className="submit-first-upper" onClick={firstUpper}>
                  FIRST LETTER UPPER
               </button>
               <button onClick={clearText}>CLEAR</button>
            </div>

            <div className="text-summury">
               <h1>Text Summary</h1>
               <hr />
               <h3 className="show-totalCount">Number of Character:{text.length}</h3>
               <h3 className="show-totalCount">Number of Words:{noOfWords}</h3>
            </div>
         </div>
      </>
   );
}
