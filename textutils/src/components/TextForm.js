import React, {useState} from 'react'


export default function TextForm(props) {

  const  handleUpClick=()=>{
        console.log("Upper Case Clicked" +text);
        let newText=text.toUpperCase();
        settext(newText);
    }

    const handleOnChange=(event)=>{
        console.log("on changed");
        settext(event.target.value);
    }

    const[text,settext]=useState("Enter text here");
    
    return (
    <div>
        <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="my-Box" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Covert To Uppercase</button>
    </div>
  )
}
