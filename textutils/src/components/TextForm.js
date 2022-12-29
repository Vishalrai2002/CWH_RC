import React, {useState} from 'react'


export default function TextForm(props) {

  const  handleUpClick=()=>{
        console.log("Upper Case Clicked" +text);
        let newText=text.toUpperCase();
        settext(newText);
    }

    const handleLoClick=()=>{
        console.log("Lower Case Clicked"+text);
        let newText=text.toLowerCase();
        settext(newText);
    }

    const handleOnClear=()=>{
        let newText='';
        settext(newText);
    }
    
    const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    }

    const handleOnChange=(event)=>{
        console.log("on changed");
        settext(event.target.value);
    }


    const[text,settext]=useState("");

    return (
        <>
    <div className="container">
        <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="my-Box" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Covert To Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Covert To Lowercase</button>
    <button className="btn btn-danger mx-1" onClick={handleOnClear}>CLear Text</button>
    <button className="btn btn-primary mx-1" onClick={speak}>Listen Your Text</button>


    </div>
    <div className="conatiner" my-3>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split("").length} minutes to read</p>
    </div>
    <h2>Preview</h2>
    <p>{text}</p>
    </>
  )
}
