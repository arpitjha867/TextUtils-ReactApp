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
        document.getSelection().removeAllRanges()  
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
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick} disabled={text.length===0}>
            Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick} disabled={text.length===0}>
            Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick} disabled={text.length===0}>
            Clear
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopyClick} disabled={text.length===0}>
            Copy
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace} disabled={text.length===0}>
            Remove Extra space
        </button>
    </div>
    <div className={`container my-3 text-${(props.mode)==='light'? 'dark':'light'}`}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*(text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
