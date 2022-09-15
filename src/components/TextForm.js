import { root } from 'postcss'
import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log('Uppercase was clicked' + text)
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleLoClick=()=>{
        console.log('Lowercase was clicked' + text)
        let newText=text.toLowerCase()
        setText(newText)
    }
    const handleClearClick=()=>{
        console.log('Clear was clicked' + text)
        let newText=''
        setText(newText)
        props.showAlert("Text area has been cleared","success")
    }
    const handleCopyClick=()=>{
        console.log('copy is made')
        var text=document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)   
        props.showAlert("Text has been copied","success")
    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    const handleOnChange=(event)=>{
        console.log('On change')
        setText(event.target.value)
        
    }
    const [text,setText]=useState("")
    // text="new text " wrong way to change the text
    // setText("new text") correct way to change the text
  return (
    <>
    
    <div className={`container text-${(props.mode)==='light'? 'dark':'light'}`} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea value={text} onChange={handleOnChange} className="form-control " style={{color:`${(props.mode)==='light'? 'white':'black'}`,background:`${(props.mode)==='light'? 'grey':'white'}`}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
            Copy
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
            Remove Extra space
        </button>
    </div>
    <div className={`container my-3 text-${(props.mode)==='light'? 'dark':'light'}`}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
