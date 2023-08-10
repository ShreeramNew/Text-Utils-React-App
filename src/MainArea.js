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
   const [copyTextBtn, setCopyTextBtn] = useState("COPY");

   //Function declaration

   let checkValue = (event) => {
      //On Change
      setText(event.target.value);
      setNoOfWords(text.split(" ").filter((element) => element.length !== 0).length);
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

   function handleCopy() {
      //Handles "Copy text" button
      let textToCopy = document.querySelector(".user-input").value;
      navigator.clipboard.writeText(textToCopy).then(() => {
         setCopyTextBtn("Copied!!");
         setTimeout(() => {
            setCopyTextBtn("Copy Text");
         }, 2000);
      });
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
               <button data-tooltip="Upper Case" className="tooltip submit-upper" onClick={Upper}>
                  UPPER CASE
               </button>
               <button data-tooltip="Lower Case" className="tooltip submit-lower" onClick={Lower}>
                  LOWER CASE
               </button>
               <button
                  data-tooltip="First letter upper"
                  className="tooltip submit-first-upper"
                  onClick={firstUpper}
               >
                  FIRST LETTER UPPER
               </button>
               <button onClick={handleCopy} className="tooltip copy-button" data-tooltip="Copy">
                  {copyTextBtn}
               </button>

               <button data-tooltip="Clear Text" className="tooltip" onClick={clearText}>
                  CLEAR
               </button>
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
