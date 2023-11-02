import { useState } from "react";
import React from "react";

export default function TextForm(props) {
  const HandleUpButton = () => {
    if(text.length>0){
    console.log("Button Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");}
    else{
      props.showAlert("Enter some text to convert", "warning");
    }
  };
  const HandleOnChange = (event) => {
    setText(event.target.value);
  };
  const HandleLoButton = () => {
    if(text.length>0){
    console.log("Button Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");}
    else{
      props.showAlert("Enter some text to convert", "warning");
    }
  };
  const HandleCapButton = () => {
    if(text.length>0){
    let camelCaseText = text
      .split(" ")
      .map(function (word, index) {
        // First character upper case else lower case
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
    setText(camelCaseText);
    props.showAlert("Converted to camel case", "success");}
    else{
      props.showAlert("Enter some text to convert", "warning");
    }
  };
  const HandleClearButton = () => {
    if(text.length>0){
    let newText="";
    setText(newText);
    props.showAlert("Text clear", "success");}
    else{
      props.showAlert("Enter some text to convert", "warning");
    }
  };
  const HandleRemoveSpaces = () =>{
    if(text.length>0){
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed", "success");}
    else{
      props.showAlert("Enter some text to convert", "warning");
    }
  };
  const HandleCopyButton = () =>{
    if(text.length>0){
      var copiedtext = document.getElementById("myBox");
    copiedtext.select();
    navigator.clipboard.writeText(copiedtext.value);
    props.showAlert("Copied to clipboard", "success");
    }
    else{
      props.showAlert("Enter some text to convert", "warning");
    }
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3">
        <h1>{props.Heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={HandleOnChange}
            style={{backgroundColor: props.mode==="dark"?"#16191c":"white",
            color: props.mode==="dark"?"white":"black"}
          }
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={HandleUpButton}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={HandleLoButton}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={HandleCapButton}>
          Camel case
        </button>
        <button className="btn btn-primary mx-2" onClick={HandleRemoveSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={HandleCopyButton}>
          Copy
        </button>
        <button className="btn btn-primary mx-2" onClick={HandleClearButton}>
          Clear
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length-1} Words and {text.length} characters
        </p>
        <p>{0.008 * (text.split(" ").length-1)} Minutes read</p>
        <h2>Preview:</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview here!"}</p>
      </div>
    </>
  );
}
