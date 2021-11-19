import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("success","Upper case has been enabled.");
    }

    const handleLowerClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("success","Lower case has been enabled.");
    }

    const handleOnChange = (event) =>{
        // console.log("handle on change was Clicked");
        
        setText(event.target.value);
    }

    const clear = ()=>{
      setText("");
      props.showAlert("success","All data has been cleared.");
    }
      // Declare a new state variable, which we'll call "count"
  const [text, setText] = useState("Enter text here");
  
    return (
        <>
      <div className={props.mode==='light'?'text-black':'text-white'}>
      <div className="mb-3">
        <label htmlFor="textarea" className="form-label"><h3>{props.heading}</h3></label>
        <textarea value={text} onChange={handleOnChange} className={`form-control ${props.mode==='light'?'bg-light  text-black':'bg-dark text-white'}`} id="textarea" rows="8"></textarea>
       
      </div>
      <div className="mx-1">
      <button type="button" className={`btn btn-primary mx-1 my-1 ${text.length===0?'disabled':''} `} onClick={handleUpClick}>Convert to Uppercase</button>
        <button type="button" className={`btn btn-primary mx-1 my-1 ${text.length===0?'disabled':''} `} onClick={handleLowerClick}>Convert to Lowercase</button>
        <button type="button" className={`btn btn-primary mx-1 my-1 ${text.length===0?'disabled':''} `} onClick={clear}>Clear</button>
      </div>
     <h3>Your Text Summary</h3>
     <p>{text.split(/\s+/).filter((text)=>{return text.length !== 0}).length} words and {text.trim().length} charachers</p>
     <h3>Preview</h3>
     <p>{text.length>0?text:'Enter something in the textbox above to preview it here.'}</p>
      </div>
  
      </>
    )
}
